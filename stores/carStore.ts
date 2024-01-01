import {defineStore, acceptHMRUpdate} from 'pinia';
import {ref} from 'vue';
import type {Car} from '@/models/api/car.ts';

export enum ListTypes {
    RECOMMENDED = 'RECOMMENDED',
    POPULAR = 'POPULAR',
    SEARCH = 'SEARCH'
}

export const useCarStore = defineStore('carStore', () => {
    // ************* STATE ************* //
    /*
    * List for Recommendation
    * */
    const recommendedList = ref<Car[]>([])
    const recommendedMeta = ref({
        currentPage: 1,
        total: 1, // set via api response
        last_page: 0, // set via api response
    })
    /*
   * List for Popular
   * */
    const popularList = ref<Car[]>([])
    const popularMeta = ref({
        currentPage: 1,
        total: 1, // set via api response
        last_page: 0, // set via api response
    })

    // Loading controls
    const isFetching = ref({
        search: false,
        all: false,
    });

    // Search
    const searchResults = ref<Car[]>()
    const searchMeta = ref({
        currentPage: 1,
        total: 0, // set via api response
        last_page: 0, // set via api response
    })
    const searchTerm = ref('')

    // ************* WATCHERS ************* //
    watch(searchTerm, async (val) => {
        if (!val) return
        await search(val)
    })

    // ************* GETTERS ************* //
    const favoriteRecommendedCars = computed(() => recommendedList.value.filter((car) => car.liked))
    const favoritePopularCars = computed(() => popularList.value.filter((car) => car.liked))
    const allLikedCars = computed(() => [...favoriteRecommendedCars.value, ...favoritePopularCars.value])
    const hasFavoriteList = computed(() => favoriteRecommendedCars.value.length > 0 || favoritePopularCars.value.length > 0)
    /**
     * @CRUD operations
     * @NOTE: All CRUD operations are performed on ...
     **/
    /**@READ**/
    const search = async (query = searchTerm.value, {page} = {page: searchMeta.value.currentPage} = {
        page: searchMeta.value.currentPage
    }) => {
        try {
            if (page === 1) {
                isFetching.value.search = true;
            }
            const res = await $fetch('/api/cars/search', {
                method: "GET", // default
                query: {
                    searchTerm: query,
                    page: page // default page
                }
            })
            if (page === 1) {
                searchMeta.value.total = res.meta.total
                searchMeta.value.last_page = res.meta.last_page
            }

            // check if any of the cars are already liked
            allLikedCars.value.forEach((car) => {
                const selected = res.data.find((c) => c.id === car.id)
                if (selected) {
                    selected.liked = car.liked
                }
            })

            page > 1 && searchResults.value ? searchResults.value = [...searchResults.value, ...res.data] : searchResults.value = res.data
            return res
        } catch (e) {
            console.error(e)
        } finally {
            if (page === 1) {
                isFetching.value.search = false;
            }
        }
    }

    /**@UPDATE**/
    const handleFavorite = (car: Car) => {
        const selectedRC = recommendedList.value.find((c) => c.id === car.id)
        const selectedPL = popularList.value.find((c) => c.id === car.id)
        const searchList = searchResults.value?.find((c) => c.id === car.id)

        if (selectedRC) {
            selectedRC['liked'] = selectedRC.liked === undefined ? true : !selectedRC.liked
        }
        if (selectedPL) {
            selectedPL['liked'] = selectedPL.liked === undefined ? true : !selectedPL.liked
        }
        if (searchList) {
            searchList['liked'] = searchList.liked === undefined ? true : !searchList.liked
        }
    }

    const setList = (cars: Car[], type?: ListTypes, shouldAddValues?: boolean) => {
        if (type === ListTypes.RECOMMENDED) {
            shouldAddValues ? recommendedList.value = [...recommendedList.value, ...cars] : recommendedList.value = cars
        }

        if (type === ListTypes.POPULAR) {
            shouldAddValues ? popularList.value = [...popularList.value, ...cars] : popularList.value = cars
        }
    }

    const setMeta = (meta: { total: number, last_page: number }, type?: ListTypes) => {
        if (type === ListTypes.RECOMMENDED) {
            recommendedMeta.value.total = meta['total']
            recommendedMeta.value.last_page = meta['last_page']
        }
        if (type === ListTypes.POPULAR) {
            popularMeta.value.total = meta['total']
            popularMeta.value.last_page = meta['last_page']
        }
    }
    const setSearchTerm = (term: string) => {
        if (term === '') {
            // Resetting search
            searchMeta.value = {
                currentPage: 1,
                total: 0,
                last_page: 0,
            }
            searchResults.value = undefined // reset to initial state
        } else {
            searchTerm.value = term
        }
    }

    const incrementPageCount = (page: number, type: ListTypes) => {
        if (type === ListTypes.RECOMMENDED) {
            recommendedMeta.value.currentPage = page
        }
        if (type === ListTypes.POPULAR) {
            popularMeta.value.currentPage = page
        }
        if (type === ListTypes.SEARCH) {
            searchMeta.value.currentPage = page
        }
    }

    return {
        searchTerm,
        searchResults,
        setSearchTerm,
        searchMeta,
        recommendedList,
        popularList,
        hasFavoriteList,
        setList,
        setMeta,
        favoriteRecommendedCars,
        incrementPageCount,
        favoritePopularCars,
        recommendedMeta,
        popularMeta,
        search,
        handleFavorite,
        isFetching
    }
});

acceptHMRUpdate(useCarStore, import.meta.hot);