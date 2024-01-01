export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const runtimeConfig = useRuntimeConfig()
        return await $fetch(`${runtimeConfig.public.carsApi}`, {
            params: {
                q: query.searchTerm,
                page: query.page,
            }
        })
    } catch (error) {
        console.log(error)
        throw createError({statusCode: 500, statusMessage: 'Car search failed'})
    }
});
