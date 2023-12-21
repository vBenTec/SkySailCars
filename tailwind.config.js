/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                white: {
                    DEFAULT: '#fff'
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
                        DEFAULT: '#F6F7F9',
                        500: '#F6F7F9'
                    }
                },
                warning: {
                    DEFAULT: '#FBAD39',
                    500: '#FBAD39'
                },
                error: {
                    DEFAULT: '#ED3F3F',
                    500: '#ED3F3F'
                }
            }
        },
    },
    plugins: [],
}

