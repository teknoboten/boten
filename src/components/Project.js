import React from 'react'
import { motion } from 'framer-motion'

export default function Project({ title, description, url }) {
    return (
        <div>
            <p>
                <span class="pink">
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </span>
                <p>{description}</p>
            </p>
        </div>
    )
}
