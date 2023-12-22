import {defineStore, acceptHMRUpdate} from 'pinia';
import {ref} from 'vue';
import type {Car} from '@/models/api/car.ts';

export enum ListTypes {
    RECOMMENDED = 'RECOMMENDED',
    POPULAR = 'POPULAR',
}

export const useCarStore = defineStore('carStore', () => {
    // ************* CONFIG ************* //
    const runtimeConfig = useRuntimeConfig();

    // ************* STATE ************* //
    /*
    * List for Recommendation
    * */
    const recommendedList = ref<Car[]>([])
    const recommendedMeta = ref({
        page: 1,
        total: 0,
    })
    /*
   * List for Popular
   * */
    const popularList = ref<Car[]>([])
    const popularMeta = ref({
        page: 1,
        total: 0,
    })

    // Loading controls
    const isFetching = ref({
        search: false,
        all: false,
    });

    // ************* GETTERS ************* //
    const favoriteRecommendedCars = computed(() => recommendedList.value.filter((car) => car.liked))
    const favoritePopularCars = computed(() => popularList.value.filter((car) => car.liked))
    const hasFavoriteList = computed(() => favoriteRecommendedCars.value.length > 0 || favoritePopularCars.value.length > 0)
    /**
     * @CRUD operations
     * @NOTE: All CRUD operations are performed on ...
     **/
    /**@READ**/
    const search = async (searchTerm: string, page?: number) => {
        try {
            isFetching.value.all = true;
            const {pending, data, error} = await useFetch(runtimeConfig.public.carsApi, {
                method: 'GET',
                // mode: 'no-cors', // otherwise we get a CORS error
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    q: searchTerm,
                    page: page || 1,
                }
            })
            return data
        } catch (e) {
            console.error(e)
        } finally {
            isFetching.value.all = false;
        }
    }

    const getAll = async () => {
        try {
            isFetching.value.search = true;
            const {pending, data, error} = await useFetch(runtimeConfig.public.carsApi, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            return data
        } catch (e) {
            console.error(e)
            throw e // handle error in component
        } finally {
            isFetching.value.search = false;
        }
    }

    /**@UPDATE**/
    const handleFavorite = (car: Car, type: ListTypes) => {
        let selectedCar: Car | undefined;
        if (type === ListTypes.RECOMMENDED) {
            selectedCar = recommendedList.value.find((c) => c.id === car.id)
        }
        if (type === ListTypes.POPULAR) {
            selectedCar = popularList.value.find((c) => c.id === car.id)
        }
        if (!selectedCar) throw new Error('Car not found')
        selectedCar.liked = !selectedCar.liked
    }

    const setList = (cars: Car[], type?: ListTypes) => {
        if (type === ListTypes.RECOMMENDED) {
            recommendedList.value = cars
        }

        if (type === ListTypes.POPULAR) {
            popularList.value = cars
        }
    }

    return {
        recommendedList,
        popularList,
        hasFavoriteList,
        setList,
        favoriteRecommendedCars,
        favoritePopularCars,
        recommendedMeta,
        popularMeta,
        getAll,
        search,
        handleFavorite,
        isFetching
    }
}, {
    persist: {
        storage: persistedState.localStorage,
        paths: ['recommendedList', 'popularList'],
    },
});

acceptHMRUpdate(useCarStore, import.meta.hot);