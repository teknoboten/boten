import React from 'react'
import { motion } from 'framer-motion'

export default function Project({ title, description, url, tags, github }) {
  return (
    <div className="project">
      <div>
        <a className="projectName" rel="noreferrer" href={url} target="_blank">
          {title}
        </a>
        <span className="github">
          <a href={github} rel="noreferrer" target="_blank">
            <motion.span
              whileHover={{ backgroundColor: 'var(--mid2)' }}
              className="material-symbols-outlined"
            >
              north_east
            </motion.span>
          </a>
        </span>
      </div>

      <p>{description}</p>

      <span>
        {tags.map((t) => (
          <span key={t} className="tags">
            {t}
          </span>
        ))}
      </span>
    </div>
  )
}
