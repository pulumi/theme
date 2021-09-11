// Tailwind configuration. Changes to this file require a dev-server restart.
//
// Configuration docs:
// https://tailwindcss.com/docs/configuration
//
// Default configuration:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const { color } = require("@pulumi/facet/dist/tokens/cjs");

const defaultTheme = require("tailwindcss/defaultTheme");
const transparent = defaultTheme.colors.transparent;

const white = color.white.value;
const black = color.black.value;

// Previous values in comments.

const red = {
    100: color.red[100].value, //"#fff5f5",
    200: color.red[200].value, //"#fed7d7",
    300: color.red[300].value, //"#feb2b2",
    400: color.red[400].value, //"#fc8181",
    500: color.red[500].value, //"#f56565",
    600: color.red[600].value, //"#e53e3e",
    700: color.red[700].value, //"#c53030",
    800: color.red[800].value, //"#9b2c2c",
    900: color.red[900].value, //"#742a2a",
};

const gray = {
    100: color.gray[100].value, // "#f9f9fa",
    200: color.gray[200].value, // "#f2f2f4",
    300: color.gray[300].value, // "#e5e5e9",
    400: color.gray[400].value, // "#d8d9df",
    500: color.gray[500].value, // "#bebfc9",
    600: color.gray[600].value, // "#8e8f97",
    700: color.gray[700].value, // "#5f6065",
    800: color.gray[800].value, // "#2f3032",
    900: color.gray[900].value, // "#131314",
};

const yellow = {
    100: color.yellow[100].value, // "#fef9ea",
    200: color.yellow[200].value, // "#fdf2d4",
    300: color.yellow[300].value, // "#fce5aa",
    400: color.yellow[400].value, // "#fad97f",
    500: color.yellow[500].value, // "#f9cc55",
    600: color.brand.yellow.value,
    700: color.yellow[700].value, // "#c69922",
    800: color.yellow[800].value, // "#947319",
    900: color.yellow[900].value, // "#634c11",
};

const salmon = {
    100: color.salmon[100].value, // "#fef1f2",
    200: color.salmon[200].value, // "#fce2e5",
    300: color.salmon[300].value, // "#fac5cb",
    400: color.salmon[400].value, // "#f7a8b2",
    500: color.salmon[500].value, // "#f58b98",
    600: color.brand.salmon.value,
    700: color.salmon[700].value, // "#c25865",
    800: color.salmon[800].value, // "#91424c",
    900: color.salmon[900].value, // "#612c32",
};

const fuchsia = {
    100: color.fuchsia[100].value, // "#f8edf3",
    200: color.fuchsia[200].value, // "#f2dbe7",
    300: color.fuchsia[300].value, // "#e5b7ce",
    400: color.fuchsia[400].value, // "#d794b6",
    500: color.fuchsia[500].value, // "#ca709d",
    600: color.brand.fuchsia.value,
    700: color.fuchsia[700].value, // "#973d6a",
    800: color.fuchsia[800].value, // "#712e50",
    900: color.fuchsia[900].value, // "#4c1e35",
};

const purple = {
    100: color.purple[100].value, // "#f3ebf4",
    200: color.purple[200].value, // "#e8d6e9",
    300: color.purple[300].value, // "#d0add3",
    400: color.purple[400].value, // "#b985bd",
    500: color.purple[500].value, // "#a15ca7",
    600: color.brand.purple.value,
    700: color.purple[700].value, // "#6e2974",
    800: color.purple[800].value, // "#531f57",
    900: color.purple[900].value, // "#37143a",
}

const violet = {
    100: color.violet[100].value, // "#f2eff9",
    200: color.violet[200].value, // "#e6def3",
    300: color.violet[300].value, // "#ccbde7",
    400: color.violet[400].value, // "#b39cdb",
    500: color.violet[500].value, // "#997bcf",
    600: color.brand.violet.value,
    700: color.violet[700].value, // "#66489c",
    800: color.violet[800].value, // "#4d3675",
    900: color.violet[900].value, // "#33244e",
};

const blue = {
    100: color.blue[100].value, // "#edeffb",
    200: color.blue[200].value, // "#dbdef7",
    300: color.blue[300].value, // "#b8bdf0",
    400: color.blue[400].value, // "#949de8",
    500: color.blue[500].value, // "#717ce1",
    600: color.brand.blue.value,
    700: color.blue[700].value, // "#3e49ae",
    800: color.blue[800].value, // "#2e3782",
    900: color.blue[900].value, // "#1f2457",
}

const orange = {
    100: color.orange[100].value, // "#fff7eb",
    200: color.orange[200].value, // "#fde6c4",
    300: color.orange[300].value, // "#fad49e",
    400: color.orange[400].value, // "#f6ba7e",
    500: color.orange[500].value, // "#ee975c",
    600: color.orange[600].value, // "#e17d47",
    700: color.orange[700].value, // "#d86131",
    800: color.orange[800].value, // "#ba4a2c",
    900: color.orange[900].value, // "#993d29",
}

const green = {
    100: color.green[100].value, // "#e0fff2",
    200: color.green[200].value, // "#b2fbe0",
    300: color.green[300].value, // "#81eeca",
    400: color.green[400].value, // "#4ce1b4",
    500: color.green[500].value, // "#2fc89f",
    600: color.green[600].value, // "#25a78b",
    700: color.green[700].value, // "#1d8673",
    800: color.green[800].value, // "#19675b",
    900: color.green[900].value, // "#155148",
}

module.exports = {
    purge: false,
    theme: {
        extend: {
            fontFamily: {
                display: [
                    "Gilroy",
                    ...defaultTheme.fontFamily.sans,
                ],
                body: [
                    "Inter",
                    ...defaultTheme.fontFamily.sans,
                ],
                mono: [
                    "Roboto Mono",
                    ...defaultTheme.fontFamily.mono,
                ]
            },
        },
        colors: {
            white,
            black,
            gray,
            transparent,
            yellow,
            salmon,
            fuchsia,
            purple,
            blue,
            red,
            orange,
            green,
            violet,
        },
        maxHeight: {
            "25": "25vh",
            "50": "50vh",
            "75": "75vh",
            "100": "100vh",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
};
