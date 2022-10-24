import React from 'react'
import { motion } from 'framer-motion'
import { recentProjects } from '../rzm.js'
import Project from './Project.js'

export default function ProjectsContainer() {
  return (
    <motion.div className="projectsContainer">
      {recentProjects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          url={project.url}
          github={project.github}
          tags={project.tags}
        />
      ))}
    </motion.div>
  )
}
