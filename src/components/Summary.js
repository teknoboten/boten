import React from 'react'
import { about } from '../rzm'
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
