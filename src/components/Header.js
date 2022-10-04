import React, { useState } from 'react';
import { motion } from "framer-motion";
import classNames from 'classnames';

// const headerVariants = {
  // hidden: { opacity: 0, scale: 50, color: 'white' },
  // visible: { opacity: 1, scale: 1, color: 'black' },
  // hover: { 
  //   scale: 1.1,
  //   color: 'fuchsia', 
  //   transition: {
  //     type: 'spring', 
  //     bounce: 1,
  //   }
  // }
// }

export default function Header() {

  return (
  <div>
    <motion.h1>
      serra boten
    </motion.h1>
  </div>

  )
}

