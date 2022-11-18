import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function School({ school, program, year }) {
  return (
    <Box padding={2}>
      <Typography variant="h6">{program}</Typography>
      <Typography variant="body1" gutterBottom>
        {school}
      </Typography>

      <Typography variant="caption">{year}</Typography>
    </Box>
  )
}
