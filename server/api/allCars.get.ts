export default defineEventHandler(async (event) => {
    try {
        const runtimeConfig = useRuntimeConfig()
        return await $fetch(`${runtimeConfig.public.carsApi}`)
    } catch (error) {
        console.log(error)
    }
});
