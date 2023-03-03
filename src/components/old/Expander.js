import React, { useState } from 'react'
import { motion } from 'framer-motion'
// import useViewportSize from '../hooks/useViewportSize'
import Summary from '../Summary'
import ProjectsContainer from '../ProjectsContainer'
import SkillsContainer from './SkillsContainer'
import JorbsContainer from '../JorbsContainer'

const classNames = require('classnames')

const titleVariants = {
  open: {
    backgroundColor: 'var(--mid2)',
    color: 'white',
    opacity: 0.75,
    width: '110%',
    x: -10,
    // transition: { type: 'spring', stiffness: '200'}
  },
  closed: {
    color: 'white',
    backgroundColor: 'var(--mid3)',
    opacity: 1,
    x: 0,
    // transition: { type: 'spring', stiffness: '200'}
  },
}

function Expander({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const expanderClass = classNames({
    expander: true,
    isOpen: isOpen,
  })

  return (
    <motion.div
      className={expanderClass}
      layout
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div variants={titleVariants} animate={isOpen ? 'open' : 'closed'}>
        <motion.h2
          // initial={{ color: 'white    ', backgroundColor: 'var(--mid3)'}}
          variants={{ titleVariants }}
          animate="open"
          // whileHover={{ color: 'var(--pink)'}}
        >
          {title}
        </motion.h2>
      </motion.div>

      {isOpen && title === 'about me' ? <Summary /> : null}
      {isOpen && title === 'recent projects' ? <ProjectsContainer /> : null}
      {isOpen && title === 'technical skills' ? <SkillsContainer /> : null}
      {isOpen && title === 'employment history' ? <JorbsContainer /> : null}
    </motion.div>
  )
}

export default Expander