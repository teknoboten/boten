import React from 'react'
import { motion } from 'framer-motion'

export default function Project({ title, description, url }) {
    return (
        <div>
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}
