import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { skills } from '../rzm.js'

export default function Skills() {
  return (
    <Grid container spacing={0} sx={{ bgcolor: '#a7ffeb', marginY: 2 }}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontFamily: 'Space Mono, monospace',
            opacity: '.5',
          }}
        >
          Skillz
        </Typography>
      </Grid>

      <Grid container spacing={3} padding={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Languages
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {skills.languages}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Libraries & Frameworks
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {skills.frameworks}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Toolbox
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {skills.toolbox}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
