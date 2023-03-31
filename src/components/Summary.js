import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

export default function Summary() {
  return (
    <Grid
      container
      variant="summary"
      spacing={0}
      sx={{
        // paddingX: '5%',
        paddingTop: '20%',
        bgcolor: 'rgba(216, 241, 248, 0.2)',
      }}
    >
      <Grid container>
        <Typography variant="h1">Hi! My name is Serra.</Typography>
        <Typography variant="h5" marginY={3}>
          I'm a Full-stack developer living in the pacific northwest.
        </Typography>
      </Grid>

      <Grid container paddingTop={4} paddingBottom={6} paddingX={4}>
        <Grid
          item
          sm={12}
          md={10}
          lg={8}
          paddingBottom={6}
          // sx={{ marginX: 'auto' }}
          sx={{ marginX: 'auto' }}
        >
          <Typography variant="h6">
            <p>
              I love building with React & Express, but I am always teaching
              myself something new. Lately that's been Typescript, Next.js,
              Docker and how to patch drywall.
            </p>
            <p>
              My super powers include creative thinking, determination, and
              reading the manual. 👩🏻‍💻 I am passionate about learning and I'm not
              afraid of a challenge!
            </p>

            <p>
              I have worked in high availability production environments and
              supported both development and clients across various SAAS
              platforms. I also have experience with agile development practices
              and familiarity with current CI/CD and DevOps methodologies.{' '}
            </p>

            <p>
              Coworkers and clients have described me as patient, hard-working,
              clever and{' '}
              <Link
                href="https://www.linkedin.com/in/serraboten/details/recommendations/"
                rel="noreferrer"
                target="_blank"
                // color="#ec407a"
                // sx={{ textDecoration: 'none', fontWeight: '500' }}
              >
                {' '}
                “pleasant to work with, as long as you don’t mind the literal
                LOL-ing coming from her desk”
              </Link>
            </p>

            <p>
              These days I prefer writing code to social media, so if you'd like
              to chat, please{' '}
              <Link
                href="mailto:serra@boten.ca"
                rel="noreferrer"
                target="_blank"
              >
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
