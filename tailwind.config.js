/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                white: {
                    DEFAULT: '#fff',
                    400: '#F6F7F9',
                    6: '#FFFFFF0F'
                },
                black: {
                    6: 'rgba(255, 255, 255, 0.06)'
                },
                primary: {
                    DEFAULT: '#3563E9',
                    500: '#3563E9'
                },
                secondary: {
                    DEFAULT: '#1A202C',
                    300: '#90A3BF',
                    400: '#596780',
                    500: '#1A202C'
                },
                tertiary: {
                    info: {
                        DEFAULT: '#54A6FF',
                        500: '#54A6FF'
                    }
                },
                grey: {
                    100: 'rgba(19, 19, 19, 0.16)',
                    400: 'rgba(195, 212, 233, 0.40)',
                    600: 'rgba(19, 19, 19, 0.60)'
                },
                warning: {
                    DEFAULT: '#FBAD39',
                    500: '#FBAD39'
                },
                error: {
                    DEFAULT: '#ED3F3F',
                    500: '#ED3F3F'
                }
            },
            boxShadow: {
                'focus': '0 0 0 2px #3563E9'
            },
            screens: {
                sm: '25em',
                // => @media (min-width: 400px)
                md: '37.5em',
                // => @media (min-width: 600px)
                lg: '64em',
                // => @media (min-width: 1024px)
                xl: '75em',
                // => @media (min-width: 1200px)
                '2xl': '96em',
                // => @media (min-width: 1536px)
                '3xl': '135em',
                // => @media (min-width: 2560px)
                '4xl': '160em',
                // => @media (min-width: 2560px)
            },
            borderRadius: {
                '3xl': '4.375rem;'
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
}

