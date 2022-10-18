import React from 'react'

export default function Jorb({ company, position, description, years }) {
  return (
    <div className="jorb">
      <p>
        {/* <span className="pink">{company} </span>
        <span className="yellow">{position}</span> */}
        <h2>{company}</h2>
        <span className="yellow">{position}</span>
        <span className="silk">{years}</span>
        <p>{description}</p>
      </p>
    </div>
  )
}
