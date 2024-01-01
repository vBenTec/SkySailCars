export default defineEventHandler(async (event) => {
    try {
        const carDetailId = event.context.params.id
        const runtimeConfig = useRuntimeConfig()
        return await $fetch(`${runtimeConfig.public.carsApi}/${carDetailId}`)
    } catch (error) {
        console.log(error)
    }
});
