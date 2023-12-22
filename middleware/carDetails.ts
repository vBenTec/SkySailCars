export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        const runtimeConfig = useRuntimeConfig()
        const res = await $fetch(`${runtimeConfig.public.carsApi}/${to.params.id}`)

    } catch (e) {
        console.error(e)
    }
})
