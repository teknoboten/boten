import React, { useState } from 'react'
import { about } from '../rzm'
import Project from './Project.js'
import { motion } from 'framer-motion'

export default function Summary() {
  return (
    <div className="content">
      {about.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  )
}

// <div className="content">
// {about.map((p, index) => (
//   <p key={index}>{p}</p>
// ))}
// </div>
