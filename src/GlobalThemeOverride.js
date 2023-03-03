import { createTheme } from '@mui/material/styles'

export const GlobalThemeOverride = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#F5DFFB',
          textDecoration: 'none',
          fontWeight: '500',
          backgroundColor: 'rgba(209, 70, 205, 0.0)',

          '&:hover': {
            boxShadow: 9,
            backgroundColor: 'rgba(209, 70, 205, 0.4)',
            transition: 'backgroundColor, 500ms',
          },
        },
      },
    },
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
          textDecoration: 'none',
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
