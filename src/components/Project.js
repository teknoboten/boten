import React from 'react'
import { motion } from 'framer-motion'

export default function Project({ title, description, url, tags }) {
  return (
    <div className="project">
      {/* <div className="projectImage"></div> */}
      <div className="projectDetails">
        <span className="pink">
          <a href={url} target="_blank">
            {title}
          </a>
        </span>
        <p>{description}</p>
        <p>
          {tags.map((t) => (
            <span key={t} className="tags">
              {t}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
