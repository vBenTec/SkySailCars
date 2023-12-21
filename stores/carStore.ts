import {defineStore, acceptHMRUpdate} from 'pinia';
import {reactive, ref} from 'vue';
import type {Car} from '@/models/api/car.ts';

export const useCarStore = defineStore('carStore', () => {
    const runtimeConfig = useRuntimeConfig();

    const favoriteCars = ref([])

    const isFetching = reactive({
        search: false,
    });
    const search = async (searchTerm: string, page?: number) => {
        try {
            isFetching.search = true;
            const res = await $fetch(runtimeConfig.public.carsApi, {
                method: 'GET',
                // mode: 'no-cors', // otherwise we get a CORS error
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Origin': 'http://localhost:3000',
                },
                params: {
                    q: searchTerm,
                    page: page || 1,
                }
            })
            return res
        } catch (e) {
            console.error(e)
        } finally {
            isFetching.search = false;
        }
    }

    /**
     * @CRUD operations
     * @NOTE: All CRUD operations are performed on ...
     **/

    /**@UPDATE**/
    const addFavorite = (car: Car) => {
        favoriteCars.value.push(car)
    }
    /**@DELETE**/
    const removeFavorite = (car: Car) => {
        favoriteCars.value = favoriteCars.value.filter((car: Car) => car.id !== car.id)
    }

    return {favoriteCars, search, addFavorite, removeFavorite, isFetching}
});

acceptHMRUpdate(useCarStore, import.meta.hot);