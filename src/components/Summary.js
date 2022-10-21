import React from 'react'
import { about } from '../rzm'
import { motion } from 'framer-motion'

export default function Summary() {
  return (
    <motion.div layout className="projectsContainer">
      {/* {about.map((p, index) => (
        <p key={index}>{p}</p>
      ))} */}
      <p>
        Passionate about learning, problem solving and iterative optimization.
        My super powers include creative thinking, determination, bug hunting
        (technical / bitey), plus the ability to make a salad that (most) people
        actually want to eat.
      </p>
      <p>
        Coworkers and clients have described me as patient, hard-working, clever
        and{' '}
        <a href="https://www.linkedin.com/in/serraboten/details/recommendations/">
          {' '}
          “pleasant to work with, as long as you don’t mind the literal LOL-ing
          coming from her desk”
        </a>
        .
      </p>
    </motion.div>
  )
}

// <div className="content">
// {about.map((p, index) => (
//   <p key={index}>{p}</p>
// ))}
// </div>
