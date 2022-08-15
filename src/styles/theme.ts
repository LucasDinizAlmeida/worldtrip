import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  color: {
    gray: {
      "500": "47585B",
      "50": "D9D9D9"
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