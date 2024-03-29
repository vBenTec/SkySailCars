import type {ResponseCarsPopular} from '@/models/api/car.ts'

export default defineEventHandler(async (event): Promise<ResponseCarsPopular> => {
    try {
        const runtimeConfig = useRuntimeConfig()
        return await $fetch(`${runtimeConfig.public.carsApi}/popular`)
    } catch (e) {
        console.error(e)
        throw createError({
            statusCode: 500,
            statusMessage: 'Could not get all popular Cars from API, check server logs for more details'
        })
    }
});
