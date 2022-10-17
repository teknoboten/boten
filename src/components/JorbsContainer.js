import React, { useState } from 'react'

import { employment } from '../rzm.js'
import Jorb from './Jorb.js'

export default function JorbsContainer() {
    const [showJorbs, setShowJorbs] = useState(false)
    const toggleJorbs = () => setShowJorbs(!showJorbs)

    return (
        <div onClick={toggleJorbs} className="section">
            <h2>Employment History</h2>

            {showJorbs &&
                employment.map((jorb) => (
                    <Jorb
                        key={jorb.company}
                        company={jorb.company}
                        position={jorb.position}
                        description={jorb.description}
                        years={jorb.years}
                    />
                ))}
        </div>
    )
}
