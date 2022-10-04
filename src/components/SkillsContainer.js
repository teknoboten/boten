import React from 'react';

import { skills } from '../rzm.js';

export default function SkillsContainer(){

  return (
    <div className="section">
      <h1>$killsz</h1>
      <h3>Languages</h3>
      <span>{skills.languages}</span>
      <h3>Frameworks & Libraries</h3>
      <span>{skills.frameworks}</span>
      <h3>Familiar Toolbox</h3>
      <span>{skills.toolbox}</span>
    </div>
  )
}
