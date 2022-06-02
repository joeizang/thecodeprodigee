import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Blinker', 'Sawarabi Mincho'].join(','),
  },
  palette: {
    primary: {
      main: '#4A107E',
    },
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
        color: 'whitesmoke',
      },
    },
  },
})
