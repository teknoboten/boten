import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Jorb({ company, position, description, years }) {
  return (
    <Box padding={2}>
      <Typography variant="h5" fontFamily={'Silkscreen'}>{position}</Typography>
      <Typography variant="h6" marginBottom={1} fontFamily={'Inconsolata'}>
        {company}
      </Typography>

      <Typography variant="h6" fontFamily={'Inconsolata'} color="text.secondary" marginBottom={2}>
        {description}
      </Typography>
      <Typography variant="caption" sx={{ fontFamily: 'Silkscreen', fontWeight: '500'}}>{years}</Typography>
    </Box>
  )
}
