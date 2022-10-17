import React, { useState } from 'react'
import Skills from './Skills.js'

export default function SkillsContainer() {
    const [showSkills, setShowSkills] = useState(false)
    const toggleSkills = () => setShowSkills(!showSkills)

    return (
        <div onClick={toggleSkills} className="section">
            <h2>Technical Skills</h2>

            {showSkills && <Skills />}
        </div>
    )
}
