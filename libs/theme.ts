import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('white', '#202023')(props),
    },
  }),
}

const fonts = {
  body: "'Montserrat', sans-serif",
  heading: "'Montserrat', sans-serif",
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ styles, fonts, config })

export default theme
