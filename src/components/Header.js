import React, { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import useViewportSize from '../hooks/useViewportSize'
import serra from '../serraDALLE.png'

export default function Header() {
  return (
    <div>
      {/* <img src={serra} /> */}
      <h1>hello, world...</h1>
      <div className="header">
        <p className="lead">
          serra boten is a freelance, full-stack web developer living in the
          pacific northwest.
        </p>
        <p>
          she created this resume because she found existing 'live resume' tools
          to be difficult to use and wanted an excuse to{' '}
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
          teach herself how to animate react components.
        </p>
      </div>
    </div>
  )
}
