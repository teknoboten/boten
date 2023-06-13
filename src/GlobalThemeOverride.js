import { createTheme } from '@mui/material/styles'

export const GlobalThemeOverride = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#4381B0',
          textDecoration: 'none',
          fontWeight: '500',
          backgroundColor: 'rgba(53, 211, 235, 0.0)',

          '&:hover': {
            boxShadow: 9,
            backgroundColor: 'rgba(53, 211, 235, 0.4)',
            transition: 'backgroundColor, 500ms',
          },
        },
      },
    },
    MuiGrid: {
      variants: [
        {
          props: { variant: 'summary' },
          style: {
            padding: '5%',
          },
        },
        {
          props: { variant: 'header' },
          style: {
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'space-between',
            padding: 0,
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: 'Silkscreen',
          fontSize: '3.75rem',
          fontWeight: 350,
          color: '#35D3EB',
          opacity: '.7',
        },
        h2: {
          fontFamily: 'Silkscreen',
          color: '#35D3EB',
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
