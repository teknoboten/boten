import React from 'react'
import { motion } from 'framer-motion'
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
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" marginBottom={2}>
        {description}
      </Typography>
      <Box marginBottom={0}>
        {url && (
          <Link
            href={url}
            rel="noreferrer"
            target="_blank"
            color="#ec407a"
            sx={{
              textDecoration: 'none',
              marginRight: 2,
            }}
          >
            <Typography variant="caption">View</Typography>
          </Link>
        )}
        <Link
          href={url}
          rel="noreferrer"
          target="_blank"
          color="#ff4081"
          sx={{
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          <Typography variant="caption">Github</Typography>
        </Link>
      </Box>
    </Box>
  )
}
