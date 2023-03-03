import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

export default function Project({ title, description, url, tags, github }) {
  return (
    <Box
      sx={{
        height: '100%',
        padding: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>

      <Typography variant="h6" padding={2} fontFamily={'Inconsolata'}>
        {description}
      </Typography>
      <Box marginBottom={0}>
        {url && (
          <Link
            href={url}
            rel="noreferrer"
            target="_blank"
            sx={{
              marginRight: 2,
              bgcolor: 'rgba(169, 243, 255, 0.2)',
              paddingX: '6px',
              paddingY: '3px',
            }}
          >
            <Typography variant="caption">View</Typography>
          </Link>
        )}
        <Link
          href={github}
          rel="noreferrer"
          target="_blank"
          sx={{
            marginRight: 2,
            bgcolor: 'rgba(169, 243, 255, 0.2)',
            paddingX: '6px',
            paddingY: '3px',
          }}
        >
          <Typography variant="caption">Github</Typography>
        </Link>
      </Box>
    </Box>
  )
}
