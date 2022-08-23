import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  color: {
    gray: {
      "700": "#47585B",
      "500": "47585B",
      "50": "D9D9D9"
    },
    myellow: {
      "100": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500'
      }
    }
  }
})