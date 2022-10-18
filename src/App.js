import React, { useState } from 'react'
import useViewportSize from './hooks/useViewportSize'
import logo from './serraDALLE.png'
import { motion, useScroll, AnimatePresence, LayoutGroup } from 'framer-motion'

import './App.css'

import Header from './components/Header'
import Expander from './components/Expander'

const classNames = require('classnames')

function App() {
  const viewport = useViewportSize()

  return (
    <div className="App">
      <Header />
      <LayoutGroup>
        <Expander title="summary" />
        <Expander title="recent projects" />
        <Expander title="technical skills" />
        <Expander title="employment history" />
      </LayoutGroup>
    </div>
  )
}

export default App
