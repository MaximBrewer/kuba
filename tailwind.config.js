const colors = require("tailwindcss/colors");
module.exports = {
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1140px"
        },
        extend: {
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem"
            }
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            orange: {
                50: "#ffe8e5",
                100: "#fff2e5",
                200: "#ffe5cc",
                300: "#ffd7b2",
                400: "#ffca99",
                500: "#ffbd80",
                600: "#ffb066",
                700: "#ffa34d",
                800: "#ff9633",
                900: "#ff7b00"
            }
        }
    },
    variants: {},
    plugins: []
};
