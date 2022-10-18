import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useViewportSize from '../hooks/useViewportSize'
import Summary from './Summary'
import ProjectsContainer from './ProjectsContainer'
import SkillsContainer from './SkillsContainer'
import JorbsContainer from './JorbsContainer'

const classNames = require('classnames');

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
        
        <motion.h2 layout>{title}</motion.h2>
        {isOpen && title === 'about' ? <Summary /> : null}
        {isOpen && title === 'recent projects' ? <ProjectsContainer /> : null}
        {isOpen && title === 'technical skills' ? <SkillsContainer /> : null}
        {isOpen && title === 'employment history' ? <JorbsContainer /> : null }
        
        </motion.div>
    )
}

export default Expander

