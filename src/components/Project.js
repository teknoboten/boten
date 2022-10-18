import React from 'react'
import { motion } from 'framer-motion'

export default function Project({ title, description, url, tags }) {
    return (
        <div class="project">
            <div class="projectImage"></div>
            <div class="projectDetails">
                <span class="pink">
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </span>
                <p>{description}</p>
                <p>
                    {tags.map((t) => (
                        <span key={t} class="tags">
                            {t}{' '}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}
