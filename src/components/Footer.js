// import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export default function Footer() {
  return (
    <Grid
      container
      xs={12}
      paddingTop={10}
      paddingBottom={4}
      sx={{ justifyContent: 'space-between' }}
    >
      <Typography variant="caption">
        Code written with {'<3'} and <a href="https://reactjs.org/">ReactJS</a>
      </Typography>
      <Typography variant="caption">
        © {new Date().getFullYear()} Serra Boten
      </Typography>
    </Grid>
  )
}
