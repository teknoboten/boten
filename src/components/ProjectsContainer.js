import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { recentProjects } from '../rzm.js'
import Project from './Project.js'

// const projectVariants = {
//   open: {
//     x: -100,
//     width: '120%',
//     transition: { type: 'spring', stiffness: '200' },
//   },
//   closed: {
//     x: 0,
//     width: '100%',
//     transition: { type: 'spring', stiffness: '200' },
//   },
// }

export default function ProjectsContainer() {
  return (
    <motion.div
      // variants={projectVariants}
      // initial="closed"
      // animate="open"
      className="projectsContainer"
    >
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
