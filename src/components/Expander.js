import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Summary from './Summary'
import ProjectsContainer from './ProjectsContainer'
import SkillsContainer from './SkillsContainer'
import JorbsContainer from './JorbsContainer'

function Expander({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            className="expander"
            layout
            onClick={() => setIsOpen(!isOpen)}
        >
        
        <motion.h2 layout>{title}</motion.h2>
        {isOpen && title === 'summary' ? <Summary /> : null}
        {isOpen && title === 'recent projects' ? <ProjectsContainer /> : null}
        {isOpen && title === 'technical skills' ? <SkillsContainer /> : null}
        {isOpen && title === 'employment history' ? <JorbsContainer /> : null }
        
        </motion.div>
    )
}

export default Expander

{
    /* {isOpen ? content : null} */
}
