// Tailwind configuration. Changes to this file require a dev-server restart.
//
// Configuration docs:
// https://tailwindcss.com/docs/configuration
//
// Default configuration:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const { colors, typography } = require("./tokens.json");

const defaultTheme = require("tailwindcss/defaultTheme");

const brand = {
    yellow: colors.brand.yellow.value,
    salmon: colors.brand.salmon.value,
    fuchsia: colors.brand.fuchsia.value,
    purple: colors.brand.purple.value,
    violet: colors.brand.violet.value,
    blue: colors.brand.blue.value,
};

const white = defaultTheme.colors.white;
const black = defaultTheme.colors.black;
const transparent = defaultTheme.colors.transparent;

const red = {
    100: colors.red["100"].value,
    200: colors.red["200"].value,
    300: colors.red["300"].value,
    400: colors.red["400"].value,
    500: colors.red["500"].value,
    600: colors.red["600"].value,
    700: colors.red["700"].value,
    800: colors.red["800"].value,
    900: colors.red["900"].value,
};

const gray = {
    100: colors.gray["100"].value,
    200: colors.gray["200"].value,
    300: colors.gray["300"].value,
    400: colors.gray["400"].value,
    500: colors.gray["500"].value,
    600: colors.gray["600"].value,
    700: colors.gray["700"].value,
    800: colors.gray["800"].value,
    850: colors.gray["850"].value,
    900: colors.gray["900"].value,
};

const yellow = {
    100: colors.yellow["100"].value,
    200: colors.yellow["200"].value,
    300: colors.yellow["300"].value,
    400: colors.yellow["400"].value,
    500: colors.yellow["500"].value,
    600: brand.yellow,
    700: colors.yellow["700"].value,
    800: colors.yellow["800"].value,
    900: colors.yellow["900"].value,
};

const salmon = {
    100: colors.salmon["100"].value,
    200: colors.salmon["200"].value,
    300: colors.salmon["300"].value,
    400: colors.salmon["400"].value,
    500: colors.salmon["500"].value,
    600: brand.salmon,
    700: colors.salmon["700"].value,
    800: colors.salmon["800"].value,
    900: colors.salmon["900"].value,
};

const fuchsia = {
    100: colors.fuchsia["100"].value,
    200: colors.fuchsia["200"].value,
    300: colors.fuchsia["300"].value,
    400: colors.fuchsia["400"].value,
    500: colors.fuchsia["500"].value,
    600: brand.fuchsia,
    700: colors.fuchsia["700"].value,
    800: colors.fuchsia["800"].value,
    900: colors.fuchsia["900"].value,
};

const purple = {
    100: colors.purple["100"].value,
    200: colors.purple["200"].value,
    300: colors.purple["300"].value,
    400: colors.purple["400"].value,
    500: colors.purple["500"].value,
    600: brand.purple,
    700: colors.purple["700"].value,
    800: colors.purple["800"].value,
    900: colors.purple["900"].value,
};

const violet = {
    100: colors.violet["100"].value,
    200: colors.violet["200"].value,
    300: colors.violet["300"].value,
    400: colors.violet["400"].value,
    500: colors.violet["500"].value,
    600: brand.violet,
    700: colors.violet["700"].value,
    800: colors.violet["800"].value,
    900: colors.violet["900"].value,
};

const blue = {
    100: colors.blue["100"].value,
    200: colors.blue["200"].value,
    300: colors.blue["300"].value,
    400: colors.blue["400"].value,
    500: colors.blue["500"].value,
    600: brand.blue,
    700: colors.blue["700"].value,
    800: colors.blue["800"].value,
    900: colors.blue["900"].value,
};

const orange = {
    100: colors.orange["100"].value,
    200: colors.orange["200"].value,
    300: colors.orange["300"].value,
    400: colors.orange["400"].value,
    500: colors.orange["500"].value,
    600: colors.orange["600"].value,
    700: colors.orange["700"].value,
    800: colors.orange["800"].value,
    900: colors.orange["900"].value,
};

const green = {
    100: colors.green["100"].value,
    200: colors.green["200"].value,
    300: colors.green["300"].value,
    400: colors.green["400"].value,
    500: colors.green["500"].value,
    600: colors.green["600"].value,
    700: colors.green["700"].value,
    800: colors.green["800"].value,
    900: colors.green["900"].value,
};

module.exports = {
    purge: false,
    theme: {
        extend: {
            fontFamily: {
                display: [typography.fontFamilies.display.value, ...defaultTheme.fontFamily.sans],
                body: [typography.fontFamilies.body.value, ...defaultTheme.fontFamily.sans],
                mono: [typography.fontFamilies.mono.value, ...defaultTheme.fontFamily.mono],
            },
            boxShadow: {
                "3xl": "0 35px 70px -20px rgba(0, 0, 0, 0.5)",
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
            25: "25vh",
            50: "50vh",
            75: "75vh",
            100: "100vh",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1536px",
        },
    },
};
