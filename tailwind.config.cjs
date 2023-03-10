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
                ["Verde"]: "rgb(22, 224, 107)",
                ["Night"]: "#0C090A",
                ["Crimson"]:"#c22d2d",
                ["Gray1"]: "#353535",
                ["Gray2"]: "#272727",
                ["Gray3"]: "#1E1E1E",
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
