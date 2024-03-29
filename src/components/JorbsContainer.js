import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { employment } from '../rzm.js'
import Jorb from './Jorb.js'

export default function JorbsContainer() {
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
      <Grid item>
        <Typography variant="h2">Work History</Typography>
      </Grid>

      {employment.map((jorb) => (
        <Grid item lg={12} key={jorb.title} sx={{ padding: 2 }}>
          <Jorb
            company={jorb.company}
            position={jorb.position}
            description={jorb.description}
            years={jorb.years}
          />
        </Grid>
      ))}
    </Grid>
  )
}
