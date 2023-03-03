import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

export default function Footer() {
  return (
    <Grid
      container
      xs={12}
      paddingTop={10}
      paddingBottom={4}
      sx={{ justifyContent: 'space-between' }}
    >
      <Typography variant="h5" sx={{ fontWeight: '500' }}>
        Coded with {'<3'} and{' '}
        <Link rel="noreferrer" target="_blank" href={'https://reactjs.org/'}>
          ReactJS
        </Link>
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: '500' }}>
        © {new Date().getFullYear()} Serra Boten
      </Typography>
    </Grid>
  )
}
