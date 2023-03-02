import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

export default function Project({ title, description, url, tags, github }) {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Typography variant="h5" fontFamily={'Silkscreen'}>
        {title}
      </Typography>

      <Typography variant="h6" padding={2} fontFamily={'Inconsolata'}>
        {description}
      </Typography>
      <Box marginBottom={0}>
        {url && (
          <Link
            href={url}
            rel="noreferrer"
            target="_blank"
            color="#ff4081"
            sx={{
              textDecoration: 'none',
              marginRight: 2,
              color: 'black',
              bgcolor: 'rgba(169, 243, 255, 0.0)',
              paddingX: '6px',
              paddingY: '3px',
              border: '2px solid rgba(47, 109, 127, 0.5)'
            }}
          >
            <Typography variant="caption" sx={{ fontFamily: 'Silkscreen', fontWeight: '500'}}>View</Typography>
          </Link>
        )}
        <Link
          href={github}
          rel="noreferrer"
          target="_blank"
          sx={{
            textDecoration: 'none',
            marginRight: 2,
            color: 'black',
            bgcolor: 'rgba(169, 243, 255, 0.0)',
            paddingX: '6px',
            paddingY: '3px',
            border: '2px solid rgba(47, 109, 127, 0.5)'
          }}
        >
          <Typography variant="caption" sx={{ fontFamily: 'Silkscreen', fontWeight: '500'}} >Github</Typography>
        </Link>
      </Box>
    </Box>
  )
}
