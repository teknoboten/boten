import React from 'react'
import { skills } from '../rzm.js'

export default function Skills() {
  return (
    <>
      {/* <h3>Languages</h3> */}
      <span className="pink">Languages</span>
      <span>{skills.languages}</span>
      <h3>Frameworks & Libraries</h3>
      <span>{skills.frameworks}</span>
      <h3>Familiar Toolbox</h3>
      <span>{skills.toolbox}</span>
    </>
  )
}
