import React, { useState } from 'react'
import Skills from './Skills.js'
import { skills } from '../rzm.js'

export default function SkillsContainer() {
    return (
        <div class="content ">
            <p>
                <span>Languages: </span>
                {skills.languages}
            </p>

            <p>
                <span>Frameworks & Libraries: </span>
                {skills.frameworks}
            </p>

            <p>
                <span>Familiar Toolbox: </span>
                {skills.toolbox}
            </p>
        </div>
    )
}
