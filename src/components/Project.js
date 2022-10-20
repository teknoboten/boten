import React from 'react'
import { motion } from 'framer-motion'
import octocat from '../githubDarkk.png'

export default function Project({ title, description, url, tags, github }) {
  return (
    <div className="project">
      <p>
        <div>
          <a className="projectName" href={url} target="_blank">
            {title}
          </a>
        </div>

        <span>
          <a className="github" href={github} target="_blank">
            github
          </a>
        </span>
        <p>{description}</p>
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
