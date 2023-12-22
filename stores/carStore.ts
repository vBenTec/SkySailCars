import {defineStore, acceptHMRUpdate} from 'pinia';
import {reactive, ref} from 'vue';
import type {Car} from '@/models/api/car.ts';

enum ListTypes {
    RECOMMENDED = 'RECOMMENDED',
    POPULAR = 'POPULAR',
}

export const useCarStore = defineStore('carStore', () => {
    const runtimeConfig = useRuntimeConfig();
    const recommendedList = ref<Car[]>([])
    const popularList = ref<Car[]>([])

    const isFetching = reactive({
        search: false,
        all: false,
    });

    // ************* GETTERS ************* //
    const favoriteRecommendedCars = computed(() => recommendedList.value.filter((car) => car.liked))
    const favoritePopularCars = computed(() => popularList.value.filter((car) => car.liked))
    /**
     * @CRUD operations
     * @NOTE: All CRUD operations are performed on ...
     **/
    /**@READ**/
    const search = async (searchTerm: string, page?: number) => {
        try {
            isFetching.all = true;
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
            isFetching.all = false;
        }
    }

    const getAll = async () => {
        try {
            isFetching.search = true;
            const {pending, data, error} = await useFetch(runtimeConfig.public.carsApi, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            return data
        } catch (e) {
            console.error(e)
        } finally {
            isFetching.search = false;
        }
    }

    /**@UPDATE**/
    const handleFavorite = (car: Car, type: ListTypes) => {
        let selectedCar: Car | undefined;
        debugger
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
        setList,
        favoriteRecommendedCars,
        recommendedList,
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