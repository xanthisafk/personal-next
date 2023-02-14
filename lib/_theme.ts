import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const fonts = {
}

const global = {
    
    '.navbar-link': {
        position: 'relative',
        color: '#FF0049',
        textDecoration: 'none !important'
    },
    '.navbar-link:hover': {
        color: '#FF0049',
    },
    '.navbar-link:before': {
        content: `""`,
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '0.25rem',
        bottom: 0,
        left: 0,
        backgroundColor: '#FF0049',
        transform: `scaleX(0)`,
        transformOrigin: `top left`,
        transition: `transform 0.3s ease`,
    },
    '.navbar-link:hover:before': {
        transform: 'scaleX(1)'
    }

}

export const theme = extendTheme({
    config,
    fonts,
    styles: { global }
});