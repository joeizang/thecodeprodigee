import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Blinker', 'Sawarabi Mincho', 'Cascadia Code', 'Roboto'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Blinker',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: ['Blinker', 'Sawarabi Mincho'],
      },
    },
  },
})
