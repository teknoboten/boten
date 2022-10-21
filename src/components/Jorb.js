import React from 'react'

export default function Jorb({ company, position, description, years }) {
  return (
    <div className="jorb">
      {/* <span className="pink">{company} </span>
        <span className="yellow">{position}</span> */}
      <h2>{company}</h2>
      <span className="jorbTitle">{position}</span>
      <span className="tags">{years}</span>
      <p>{description}</p>
    </div>
  )
}
