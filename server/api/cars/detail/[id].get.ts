export default defineEventHandler(async (event) => {
    const carDetailId = event.context.params?.id
    if (!carDetailId) {
        throw createError({statusCode: 400, statusMessage: 'car detail id is undefined'})
    }
    const runtimeConfig = useRuntimeConfig()
    return await $fetch(`${runtimeConfig.public.carsApi}/${carDetailId}`).catch(e => {
        console.log(e)
        throw createError({
            statusCode: 500,
            statusMessage: 'Could not get car detail from API, check server logs for more details'
        })
    })
});
