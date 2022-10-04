import React from 'react'

import { employment } from '../rzm.js'
import Jorb from './Jorb.js'

export default function JorbsContainer() {
    return (
        <div className="section">
            <h1>Employment History</h1>

            {employment.map((jorb) => (
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

// {recentProjects.map(project => <Project key={project.title} title={project.title} description={project.description} />)}
