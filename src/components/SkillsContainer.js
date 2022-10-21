import React, { useState } from 'react'
import { skills } from '../rzm.js'

export default function SkillsContainer() {
  return (
    <div className="projectsContainer">
      <div className="skill">
        <span className="tags">Languages</span> {skills.languages}
      </div>
      <div className="skill">
        <span className="tags">Frameworks & Libraries</span> {skills.frameworks}
      </div>
      <div className="skill">
        <span className="tags">Familiar Toolbox</span> {skills.toolbox}
      </div>
    </div>
  )
}
