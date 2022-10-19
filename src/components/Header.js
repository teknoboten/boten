import React, { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import useViewportSize from '../hooks/useViewportSize'
import serra from '../serraDALLE.png'

// const headerVariants = {
// hidden: { opacity: 0, scale: 50, color: 'white' },
// visible: { opacity: 1, scale: 1, color: 'black' },
// hover: {
//   scale: 1.1,
//   color: 'fuchsia',
//   transition: {
//     type: 'spring',
//     bounce: 1,
//   }
// }
// }

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

              // color: 'var(--dark)',
            }}
            animate={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              // color: 'var(--mid2)',
              transition: { delay: 1, type: 'tween', duration: 2 },
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
