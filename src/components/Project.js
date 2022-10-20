import React from 'react'
import { motion } from 'framer-motion'

export default function Project({ title, description, url, tags, github }) {
  return (
    <div className="project">
      <p>
        <div>
          <a className="projectName" href={url} target="_blank">
            {title}
          </a>
        </div>

        <p>
          {description}
          <span className="github">
            <a href={github} target="_blank">
              <motion.span
                whileHover={{ backgroundColor: 'var(--mid2)' }}
                className="material-symbols-outlined"
              >
                north_east
              </motion.span>
            </a>
          </span>
        </p>

        <span>
          {tags.map((t) => (
            <span key={t} className="tags">
              {t}
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}
