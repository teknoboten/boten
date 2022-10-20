import React, { useState } from 'react'
import Skills from './Skills.js'
import { skills } from '../rzm.js'

export default function SkillsContainer() {
  return (
    <div className="content">
      <p>
        <span className="pink">Languages: </span>
        {skills.languages}
      </p>

      <p>
        <span className="pink">Frameworks & Libraries: </span>
        {skills.frameworks}
      </p>

      <p>
        <span className="pink">Familiar Toolbox: </span>
        {skills.toolbox}
      </p>
    </div>
  )
}
