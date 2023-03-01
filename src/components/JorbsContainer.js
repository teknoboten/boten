import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { employment } from '../rzm.js'
import Jorb from './Jorb.js'

export default function JorbsContainer() {
  return (
    <Box sx={{ bgcolor: 'rgba(240, 244, 195, 0.3)', marginY: 2 }}>
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontFamily: 'Silkscreen',
          opacity: '.5',
        }}
      >
        Employment History
      </Typography>
      <Grid container spacing={3}>
        {employment.map((jorb) => (
          <Grid item xs={12} sm={4} key={jorb.title}>
            <Jorb
              // key={jorb.company}s
              company={jorb.company}
              position={jorb.position}
              description={jorb.description}
              years={jorb.years}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
