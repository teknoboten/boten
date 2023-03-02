import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function School({ school, program, year }) {
  return (
    <Box padding={2}>
      <Typography variant="h5">{program}</Typography>
      <Typography variant="h6">{school}</Typography>
      <Typography variant="caption">{year}</Typography>
    </Box>
  )
}
