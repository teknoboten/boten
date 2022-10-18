import React from 'react'

export default function Jorb({ company, position, description, years }) {
    return (
        <div>
            <p>
                <span class="pink">{company} </span>
                <span class="yellow">{position}</span>
                <p>{description}</p>
                {years}
            </p>
        </div>
    )
}
