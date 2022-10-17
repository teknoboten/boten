import React, { useState } from 'react'
import { summary } from '../rzm'
import Project from './Project.js'

export default function Summary() {
    const [showSummary, setShowSummary] = useState(false)
    const toggleSummary = () => setShowSummary(!showSummary)

    return (
        <div onClick={toggleSummary} className="section">
            <h2>Summary</h2>

            {showSummary &&
                summary.map((p, index) => <p key={index + 1}>{p}</p>)}
        </div>
    )
}
