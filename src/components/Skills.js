import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { skills } from '../rzm.js'

export default function Skills() {
  return (
    <Grid container 
      spacing={0} 
      sx={{  paddingX: '5%', paddingBottom: 6, bgcolor: 'rgba(167, 255, 235, 0.3)', marginY: 2 }}>

      <Grid item xs={12} >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontFamily: 'Silkscreen',
            opacity: '.2',
          }}
        >
          Skillz
        </Typography>
      </Grid>

        <Grid item xs={12} sm={8} paddingY={2} sx={{ marginX: 'auto' }}>
          <Typography variant="h5" fontFamily={'Silkscreen'}>
            Languages: 
          </Typography>

          <Typography variant="h5" paddingX={2} fontFamily={'Inconsolata'}>
          {skills.languages}
          </Typography>
        </Grid>


        <Grid item xs={12} sm={8} paddingY={2} sx={{ marginX: 'auto' }}>
          <Typography variant="h5" fontFamily={'Silkscreen'}>
          Libraries & Frameworks: 
          </Typography>

          <Typography variant="h5" paddingX={2} fontFamily={'Inconsolata'}>
          {skills.frameworks}
          </Typography>
        </Grid>


        <Grid item xs={12} sm={8} paddingY={2} sx={{ marginX: 'auto' }}>
          <Typography variant="h5" fontFamily={'Silkscreen'}>
         Ops Toolbox: 
          </Typography>

          <Typography variant="h5" paddingX={2} fontFamily={'Inconsolata'}>
          {skills.toolbox}
          </Typography>
        </Grid>


      </Grid>
  )
}
