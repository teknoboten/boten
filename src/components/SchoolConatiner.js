import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { education } from '../rzm.js'
import School from './School.js'

export default function SchoolContainer() {
  return (
    <Box sx={{ bgcolor: '#fce4ec', marginY: 2 }}>
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontFamily: 'Space Mono, monospace',
          opacity: '.5',
        }}
      >
        Education
      </Typography>
      <Grid container spacing={3}>
        {education.map((school) => (
          <Grid item xs={12} sm={4} key={school.title}>
            <School
              school={school.school}
              program={school.program}
              year={school.year}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
