// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import Typography from '@mui/material/Typography'

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         h2: {
//           fontFamily: 'Silkscreen',
//         },
//       },
//     },
//   },
// })

// export default function GlobalThemeOverride() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Typography variant="h2">Hi! My name is SerraSFSDFSDFSDFSD</Typography>
//     </ThemeProvider>
//   )
// }

import { createTheme } from '@mui/material/styles'

export const GlobalThemeOverride = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontFamily: 'Silkscreen',
        },
      },
    },
  },
})
