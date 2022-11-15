import React from 'react'
// import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'

export default function Summary() {
  return (
    <Grid
      container
      spacing={0}
      sx={{ paddingX: '5%', paddingTop: '20%', bgcolor: '#d1c4e9' }}
    >
      <Grid item xs={12} sm={2}>
        <Avatar
          alt="Serra Boten"
          src="serra.JPG"
          sx={{ width: '90%', height: '90%' }}
        />
      </Grid>
      <Grid container xs={12} sm={10} sx={{ alignItems: 'center' }}>
        <Typography variant="h4" marginX={2}>
          Hi! My name is Serra and I am a freelance full-stack web developer
          living in the pacific northwest.
        </Typography>
      </Grid>

      <Grid item xs={12} paddingY={4} paddingX={6}>
        <Typography variant="body">
          <p>
            Passionate about learning, problem solving and iterative
            optimization. My super powers include creative thinking,
            determination, bug hunting (technical / bitey), plus the ability to
            make a salad that (most) people actually want to eat.
          </p>
          <p>
            Coworkers and clients have described me as patient, hard-working,
            clever and{' '}
            <Link
              href="https://www.linkedin.com/in/serraboten/details/recommendations/"
              rel="noreferrer"
              target="_blank"
              color="#ec407a"
              sx={{ textDecoration: 'none' }}
            >
              {' '}
              “pleasant to work with, as long as you don’t mind the literal
              LOL-ing coming from her desk”
            </Link>
            {/* <a > */}
            {/* </a> */}.
          </p>
        </Typography>
      </Grid>
    </Grid>
  )
}
