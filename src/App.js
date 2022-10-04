import React, { useState } from 'react'
// import logo from './serraDALLE.png';
import { motion, useScroll } from 'framer-motion'
import './App.css'

import Header from './components/Header'
import Summary from './components/Summary'
import ProjectsContainer from './components/ProjectsContainer'
import SkillsContainer from './components/SkillsContainer'
import JorbsContainer from './components/JorbsContainer'

function App() {
    return (
        <div className="App">
            <Header />
            <Summary />
            <ProjectsContainer />
            <SkillsContainer />
            <JorbsContainer />
        </div>
    )
}

export default App
