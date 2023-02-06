import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const fonts = {
    a: `"Fira Code", monospace`
}

const global = {
    '.nav-link-container > a': {
        fontFamily: `"Fira Code", monospace`,
        fontWeight: 700,
        fontSize: '18px',
        color: '#FF0049',
    }
}

export const theme = extendTheme({
    config,
    fonts,
    styles: {global}
});