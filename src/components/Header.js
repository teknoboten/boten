import React, { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import useViewportSize from '../hooks/useViewportSize'
import serra from '../serraDALLE.png'

export default function Header() {
  return (
    <div className="header">
      {/* <img src={serra} /> */}
      <h1>hello, world...</h1>

      <div className="lead">
        <p>
          👋 Hi! My name is Serra Boten and I am a freelance full-stack web
          developer living in the pacific northwest.
        </p>
      </div>
      {/* <p>
        My background in technical support and network operations has given me
        passion for learning, problem solving and iterative optimization. My
        super powers include creative thinking, determination, bug hunting
        (technical / bitey), plus the ability to make a salad that (most) people
        actually want to eat.
      </p>
      <p>
        Coworkers and clients have described me as patient, hard-working, clever
        and{' '}
        <a href="https://www.linkedin.com/in/serraboten/details/recommendations/">
          “pleasant to work with, as long as you don’t mind the literal LOL-ing
          coming from her desk”
        </a>
        .
      </p> */}
      <p>
        This resume is an ever evolving home for various projects I'm working
        on, and has also been a very legitimate reason for me to{' '}
        <motion.span
          initial={{
            backgroundColor: 'rgba(0,0,0,0)',
          }}
          animate={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            transition: { delay: 2, type: 'tween', duration: 2 },
          }}
        >
          play with
        </motion.span>{' '}
        teach myself how to animate React components. If you're interested in
        working together, ping me at{' '}
        <a href="mailto:serra@boten.ca">serra@boten.ca</a>.
      </p>
    </div>
  )
}
