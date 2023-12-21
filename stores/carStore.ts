import {defineStore, acceptHMRUpdate} from 'pinia';
import {reactive, ref} from 'vue';
import type {Car} from '@/models/api/car.ts';

export const useCarStore = defineStore('carStore', () => {
    const runtimeConfig = useRuntimeConfig();

    const favoriteCars = ref([])
    const carList = ref([])

    const isFetching = reactive({
        search: false,
        all: false,
    });
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
    const handleFavorite = (car: Car) => {
        console.log(car)
        // favoriteCars.value.push(car)
    }

    return {carList, favoriteCars, getAll, search, handleFavorite, isFetching}
});

acceptHMRUpdate(useCarStore, import.meta.hot);