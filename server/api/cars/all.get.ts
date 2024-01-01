import type {ResponseCarsAll} from '@/models/api/car.ts'

export default defineEventHandler(async (event): Promise<ResponseCarsAll> => {
    try {
        const query = getQuery(event)
        const runtimeConfig = useRuntimeConfig()
        return await $fetch(`${runtimeConfig.public.carsApi}`, {
            query: {
                page: query.page || 1
            }
        })
    } catch (e) {
        console.error(e)
        throw createError({
            statusCode: 500,
            statusMessage: 'Could not get all Cars from API, check server logs for more details'
        })
    }
});
