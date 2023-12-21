// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Sky Sail Cars',
            viewport:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
            meta: [
                {charset: 'UTF-8'},
                {
                    name: 'description',
                    content: 'A fictional car dealership website',
                },
                {name: 'theme-color', content: '--color-dark-1'},
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'robots', content: 'index, follow'},
                {
                    name: 'keywords',
                    content:
                        'Car-rental',
                },
            ],
            htmlAttrs: {
                lang: 'en',
            }
        },
        rootTag: 'main',
    },
    components: {
        dirs: ['@/components/library', '@/components/library/forms']
    },
    css: ['@/assets/css/tailwind.css', '@/assets/postcss/main.pcss'],
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', "@nuxt/image", "@vueuse/nuxt"],
    tailwindcss: {
        cssPath: '@/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
    },
    devtools: {enabled: true}
})