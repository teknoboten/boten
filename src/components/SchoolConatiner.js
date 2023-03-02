import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { education } from '../rzm.js'
import School from './School.js'

export default function SchoolContainer() {
  return (
    <Grid
    container
    sx={{ paddingX: '5%', paddingBottom: 6, bgcolor: 'rgba(252, 228, 236, 0.3)', marginY: 2 }}
>      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontFamily: 'Silkscreen',
          opacity: '.5',
        }}
      >
        Education
      </Typography>
      <Grid container spacing={0}>
        {education.map((school) => (
          <Grid item xs={12} sm={8}  sx={{ marginX: 'auto' }} key={school.title}>
            <School
              school={school.school}
              program={school.program}
              year={school.year}
            />
          </Grid>
        ))}
      </Grid>
      </Grid>
  )
}
