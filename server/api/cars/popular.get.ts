export default defineEventHandler(async (event) => {
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
