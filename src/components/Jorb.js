import React from 'react'

export default function Jorb({ company, position, description, years }) {
    return (
        <>
            <h3>{company}</h3>
            <h5>{position}</h5>
            <p>{description}</p>
            <span>{years}</span>
        </>
    )
}
