import React, { useState } from 'react'
import Skills from './Skills.js'
import { skills } from '../rzm.js'

export default function SkillsContainer() {
  return (
    <div className="content">
      <p>
        <span className="tags">Languages</span>
        {skills.languages}
      </p>

      <p>
        <span className="tags">Frameworks & Libraries</span>
        {skills.frameworks}
      </p>

      <p>
        <span className="tags">Familiar Toolbox</span>
        {skills.toolbox}
      </p>
    </div>
  )
}
