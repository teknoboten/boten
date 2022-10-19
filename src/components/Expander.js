import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useViewportSize from '../hooks/useViewportSize'
import Summary from './Summary'
import ProjectsContainer from './ProjectsContainer'
import SkillsContainer from './SkillsContainer'
import JorbsContainer from './JorbsContainer'

const classNames = require('classnames');

const titleVariants = {
    open: { backgroundColor: 'var(--mid2)', 
        color: 'var(--dark)',   
        x: -100, opacity: 0.75, width: '120%',
        transition: { type: 'spring', stiffness: '200'}  
    },
    closed: { x: 0, opacity: 1,
        transition: { type: 'spring', stiffness: '200'}
    },
  }
  
  
function Expander({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const viewport = useViewportSize();

    const expanderClass = classNames({
        expander: true,
        'isOpen': isOpen,
        'small': (viewport === 'small'),
        'medium': (viewport === 'medium'),
        'large': (viewport === 'large'),
    });

    return (
        <motion.div
            className={expanderClass}
            layout
            onClick={() => setIsOpen(!isOpen)}
        >
        
        <motion.div 
            variants={titleVariants}
            animate={isOpen ? "open" : "closed"}
        >
            <h2>{title}</h2>
        </motion.div>

        {isOpen && title === 'about' ? <Summary /> : null}
        {isOpen && title === 'recent projects' ? <ProjectsContainer /> : null}
        {isOpen && title === 'technical skills' ? <SkillsContainer /> : null}
        {isOpen && title === 'employment history' ? <JorbsContainer /> : null }
        
        </motion.div>
    )
}

export default Expander




{/* <motion.h2 
variants={variants}
animate={isOpen ? "open" : "closed"}
>
{title}
</motion.h2> */}