import { createTheme } from '@mui/material/styles'

export const GlobalThemeOverride = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: 'Silkscreen',
          fontSize: '3.75rem',
          fontWeight: 350,
          color: 'white',
          opacity: '.7',
        },
        h2: {
          fontFamily: 'Silkscreen',
          color: 'white',
          opacity: '.2',
        },
        h5: {
          fontFamily: 'Silkscreen',
        },
        h6: {
          fontFamily: 'Inconsolata',
          fontSize: '1.5rem',
          lineHeight: 1.334,
        },
        caption: {
          fontFamily: 'Silkscreen',
          fontWeight: '500',
          fontSize: '0.9rem',
          lineHeight: 1.75,
        },
      },
    },
  },
})
