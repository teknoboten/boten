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
      <p>
        This resume is an ever evolving home for various projects I'm working
        on, and also a very legitimate reason for me to{' '}
        <motion.span
          initial={{
            // backgroundColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(243, 234, 244,0)',
            color: 'rgba(0,0,0,1)',
          }}
          animate={{
            backgroundColor: 'rgba(243, 234, 244,0.6)',
            color: 'rgba(243, 234, 244,0.7)',
            // backgroundColor: 'rgba(0,0,0,0.7)',
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
