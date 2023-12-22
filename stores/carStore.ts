import {defineStore, acceptHMRUpdate} from 'pinia';
import {ref} from 'vue';
import type {Car} from '@/models/api/car.ts';

export enum ListTypes {
    RECOMMENDED = 'RECOMMENDED',
    POPULAR = 'POPULAR',
    SEARCH = 'SEARCH'
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

    // list for all cars
    const combinedList = computed(() => Array.from(new Set([...popularList.value, ...recommendedList.value])))

    // Loading controls
    const isFetching = ref({
        search: false,
        all: false,
    });

    // Search
    const searchResults = ref<Car[]>()

    // ************* GETTERS ************* //
    const favoriteRecommendedCars = computed(() => recommendedList.value.filter((car) => car.liked))
    const favoritePopularCars = computed(() => popularList.value.filter((car) => car.liked))
    const hasFavoriteList = computed(() => favoriteRecommendedCars.value.length > 0 || favoritePopularCars.value.length > 0)
    /**
     * @CRUD operations
     * @NOTE: All CRUD operations are performed on ...
     **/
    /**@READ**/
    const search = async (searchTerm: string, {page, searchLocal}: { page?: number, searchLocal?: boolean } = {
        page: 1,
        searchLocal: false
    }) => {
        try {
            // local search through the list ✈️ no wifi in airplane
            // :TODO use fuse.js for search
            searchResults.value = []
            if (searchLocal) {
                searchResults.value = combinedList.value.reduce((accumulator: Car[], car) => {
                    if (car.name.includes(searchTerm)) {
                        accumulator.push(car)
                    }
                    return accumulator
                }, [])
            }
            // search through api

            // isFetching.value.all = true;
            // const {pending, data, error} = await useFetch(runtimeConfig.public.carsApi, {
            //     method: 'GET',
            //     // mode: 'no-cors', // otherwise we get a CORS error
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     params: {
            //         q: searchTerm,
            //         page: page || 1,
            //     }
            // })
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
    const handleFavorite = (car: Car) => {
        const selectedRC = recommendedList.value.find((c) => c.id === car.id)
        const selectedPL = popularList.value.find((c) => c.id === car.id)

        if (selectedRC) {
            selectedRC.liked = !selectedRC.liked
        }
        if (selectedPL) {
            selectedPL.liked = !selectedPL.liked
        }
    }

    const setList = (cars: Car[], type?: ListTypes) => {
        if (type === ListTypes.RECOMMENDED) {
            recommendedList.value = cars
        }

        if (type === ListTypes.POPULAR) {
            popularList.value = cars
        }
    }

    const resetSearch = () => searchResults.value = undefined

    return {
        searchResults,
        recommendedList,
        popularList,
        hasFavoriteList,
        setList,
        favoriteRecommendedCars,
        favoritePopularCars,
        recommendedMeta,
        popularMeta,
        resetSearch,
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