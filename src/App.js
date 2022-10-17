import React, { useState } from 'react'
// import logo from './serraDALLE.png';
import { motion, useScroll, AnimatePresence, LayoutGroup } from 'framer-motion'
import './App.css'

import Header from './components/Header'
import Summary from './components/Summary'
import ProjectsContainer from './components/ProjectsContainer'
import SkillsContainer from './components/SkillsContainer'
import JorbsContainer from './components/JorbsContainer'
import Expander from './components/Expander'

function App() {
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
