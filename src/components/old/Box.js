import React, { useState } from 'react';
import { motion } from "framer-motion";
import classNames from 'classnames';

// const boxVariants = {
//   hidden: { 
//     // scale: 100,
//     opacity: 0, 
//     x: '-100vh'
//   },
//   visible: {
//     // scale: 1,
//     opacity: 1,
//     x: 0,
//     transition: { 
//       type: 'spring', 
//       mass: 0.4,               //higher moves slower and lower means faster
//       damping: 8,              //strength of the apposing force
//       when: 'beforeChildren',
//       staggerChildren: 3
//     }
//   } 
// }

// const childVariants = {
//   hidden: {
//     // opacity: 0, 
//     x: 0
//   },
//   visible: {
//     // opacity: 1,
//     x: [0, -50, 50, -100, 100, 0]
//   },
//   // hover: { scale: 2, backgroundColor: 'black', color: 'white' }
//   hover: { scale: 2, backgroundColor: 'rgba(255,255,255,1)', color: 'rgba(0,0,0,1)' }
// }

export default function Box() {

  const sections = [
    'summary',
    'skills',
    'projects', 
    'history'
  ];

  return (
    <motion.div
      className='section'
      initial="hidden"
      animate="visible"
    >
      <motion.h2>"an animated rezoom"</motion.h2>

        {sections.map(section => <motion.div whileHover="hover" className='small' key={section}>{section}</motion.div>)}
    
    </motion.div>





  
  )
}