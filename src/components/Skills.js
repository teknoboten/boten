import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { skills } from '../rzm.js'

export default function Skills() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        paddingX: '5%',
        paddingBottom: 6,
        bgcolor: 'rgba(167, 255, 235, 0.3)',
        marginY: 2,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            opacity: '.2',
          }}
        >
          Skillz
        </Typography>
      </Grid>

      <Grid item lg={10} sx={{ padding: 2 }}>
        <Typography variant="h5">Languages:</Typography>

        <Typography variant="h6" paddingX={2}>
          {skills.languages}
        </Typography>
      </Grid>

      <Grid item lg={10} sx={{ padding: 2 }}>
        <Typography variant="h5">Libraries & Frameworks:</Typography>

        <Typography variant="h6" paddingX={2}>
          {skills.frameworks}
        </Typography>
      </Grid>

      <Grid item lg={10} sx={{ padding: 2 }}>
        <Typography variant="h5">Toolbox:</Typography>

        <Typography variant="h6" paddingX={2}>
          {skills.toolbox}
        </Typography>
      </Grid>
    </Grid>
  )
}
