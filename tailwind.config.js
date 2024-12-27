/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                '1xl': '1440px',
                '3xl': '1920px',
                '4xl': '2240px',
                '5xl': '2560px',
                '6xl': '2920px',
                '7xl': '3360px',
                '8xl': '3840px',
            },
        },
    },
    plugins: [],
}
