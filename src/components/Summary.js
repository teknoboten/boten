import React, { useState } from 'react'
import { summary } from '../rzm'
import Project from './Project.js'
import { motion } from 'framer-motion'

export default function Summary() {
    return (
        <div class="content">
            {summary.map((p, index) => (
                <p key={index}>{p}</p>
            ))}
        </div>
    )
}
