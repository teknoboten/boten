import React from 'react'
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

      <Grid container xs={12} paddingY={4} paddingX={4}>
        <Grid item xs={12} sm={8} sx={{ marginX: 'auto' }}>
          <Typography variant="body1">
            <p>
              My super powers include creative thinking, determination, and bug
              hunting (technical / bitey). I am passionate about learning,
              problem solving, iterative optimization, and snacks.
            </p>
            <p>
              Coworkers and clients have described me as patient, hard-working,
              clever and{' '}
              <Link
                href="https://www.linkedin.com/in/serraboten/details/recommendations/"
                rel="noreferrer"
                target="_blank"
                color="#ec407a"
                sx={{ textDecoration: 'none', fontWeight: '500' }}
              >
                {' '}
                “pleasant to work with, as long as you don’t mind the literal
                LOL-ing coming from her desk”
              </Link>
            </p>

            <p>
              Lately, I have been focussed on building things with React, but am
              always interested in collaborating. If you'd like to chat, please
              <Link
                href="mailto:serra@boten.ca"
                rel="noreferrer"
                target="_blank"
                color="#ec407a"
                sx={{ textDecoration: 'none', fontWeight: '500' }}
              >
                {' '}
                send me an email.
              </Link>{' '}
              I'd love to hear from you!
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
