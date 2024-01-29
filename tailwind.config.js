/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // keyframes: {
            //     pulse: {
            //         "0%": { backgroundPosition: "0% 0%" },
            //         "100%": { backgroundPosition: "-135% 0%" },
            //     },
            // },
        },
        fontFamily: {
            inter: ["Inter"],
        },
    },
    plugins: [],
};
