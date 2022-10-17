import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { recentProjects } from '../rzm.js'
import Project from './Project.js'

export default function ProjectsContainer() {
    return (
        <div>
            {recentProjects.map((project) => (
                <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                />
            ))}
        </div>
    )
}
