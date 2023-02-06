import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './_theme'
import "@fontsource/fira-code";

function MyApp({ Component, pageProps }) {
  
    return ( 
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp
