import React from 'react'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/freehand'
import '@fontsource/sora/700.css'
import '@fontsource/yantramanav/900.css'
import '@fontsource/alata/400.css'
import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import theme from './assets/theme'

const fonts={
        logo:'Freehand',
        menu: 'Sora',
        texts:'Alata',
        titles:'Yantramanav'
}
const Theme=extendTheme({fonts})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
