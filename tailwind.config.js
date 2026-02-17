/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "hsl(245, 58%, 51%)",
                    foreground: "hsl(0, 0%, 100%)",
                },
                accent: "#8B0000",
                background: "#F7F6F3",
                foreground: "#111111",
            },
            fontFamily: {
                serif: ['"Libre Baskerville"', "serif"],
                sans: ['"Inter"', "sans-serif"],
            },
        },
    },
    plugins: [],
}
