import React, { useState } from 'react'
import { summary } from '../rzm'

export default function Summary() {
    const [showSummary, setShowSummary] = useState(false)
    const toggleSummary = () => setShowSummary(!showSummary)

    return (
        <div onClick={toggleSummary} className="section">
            <h1>Summary</h1>

            {showSummary &&
                summary.map((p, index) => <p key={index + 1}>{p}</p>)}
        </div>
    )
}
