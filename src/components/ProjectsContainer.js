import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { recentProjects } from '../rzm.js'
import Project from './Project.js'

export default function ProjectsContainer() {
  return (
    <Grid
      container
      spacing={0}
      sx={{ bgcolor: 'rgba(132, 255, 255, 0.3)', marginY: 2 }}
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontFamily: 'Silkscreen',
            opacity: '.5',
          }}
        >
          Recent Projects
        </Typography>
      </Grid>

      {recentProjects.map((project) => (
        <Grid item padding={2} xs={12} sm={4} key={project.title}>
          <Project
            title={project.title}
            description={project.description}
            url={project.url}
            github={project.github}
            tags={project.tags}
          />
        </Grid>
      ))}
    </Grid>
  )
}
