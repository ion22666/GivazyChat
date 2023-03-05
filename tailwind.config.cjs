/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                ["Black-Blue"]: "#01212d",
                ["Verde"]: "#59e254",
                ["Night"]: "#0C090A",
            },
        },
        fontFamily: {
            "Whyte-Black": "Whyte-Black",
            "Whyte-Bold": "Whyte-Bold",
            "Whyte-Book": "Whyte-Book",
            "Whyte-ExtraLight": "Whyte-ExtraLight",
            "Whyte-Heavy": "Whyte-Heavy",
            "Whyte-HeavyItalic": "Whyte-HeavyItalic",
            "Whyte-Italic": "Whyte-Italic",
            "Whyte-Light": "Whyte-Light",
            "Whyte-Medium": "Whyte-Medium",
            "Whyte-Regular": "Whyte-Regular",
            "Whyte-Super": "Whyte-Super",
            "Whyte-Thin": "Whyte-Thin",
        },
    },
    plugins: [],
};
