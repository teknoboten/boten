import React from 'react'
import { about } from '../rzm'
import { motion } from 'framer-motion'

export default function Summary() {
  return (
    <motion.div layout className="content">
      {about.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </motion.div>
  )
}

// <div className="content">
// {about.map((p, index) => (
//   <p key={index}>{p}</p>
// ))}
// </div>
