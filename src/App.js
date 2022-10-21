import React from 'react'
import useViewportSize from './hooks/useViewportSize'
import logo from './serraDALLE.png'
import { motion, useScroll, AnimatePresence, LayoutGroup } from 'framer-motion'

import './App.css'

import Header from './components/Header'
import Expander from './components/Expander'

function App() {
  const viewport = useViewportSize()

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <LayoutGroup>
          <Expander title="about me" />
          <Expander title="technical skills" />
          <Expander title="recent projects" />
          <Expander title="employment history" />
        </LayoutGroup>
      </div>
    </div>
  )
}

export default App
