import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { motion } from 'framer-motion'

const Console = () => {
  const hello = [
    'h',
    'e',
    'l',
    'l',
    'o',
    ',',
    ' ',
    'w',
    'o',
    'r',
    'l',
    'd',
    '.',
    '.',
    '.',
  ]
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        // type: 'tween',
        // duration: 0.1,
        delay: 1.5,
        staggerChildren: 0.08,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.1,
      },
    },
  }

  const [typing, setTyping] = useState(false)
  const sayHello = () => {
    console.log('click!')
    setTyping(!typing)
  }

  // const typer = () => {
  //   return (
  //     <motion.h3 variants={sentence} initial="hidden" animate="visible">
  //       {hello.map((char, index) => {
  //         return (
  //           <motion.span key={char + '-' + index} variants={letter}>
  //             {char}
  //           </motion.span>
  //         )
  //       })}
  //     </motion.h3>
  //   )
  // }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          onClick={sayHello}
          sx={{
            marginTop: '30vh',
            marginX: 'auto',
            bgcolor: 'white',
            width: '100%',
            height: '40vh',
            fontFamily: 'Silkscreen',
            color: '#ec407a',
          }}
        >
          <Typography variant="h5" color="#ec407a">
            serra@internetz#
            {typing ? (
              <motion.h5
                variants={sentence}
                initial="hidden"
                animate="visible"
                fontFamily="Silkscreen"
              >
                {hello.map((char, index) => {
                  return (
                    <motion.span key={char + '-' + index} variants={letter}>
                      {char}
                    </motion.span>
                  )
                })}
              </motion.h5>
            ) : (
              <motion.span
                className="blinker"
                animate={{ color: '#ffffff' }}
                transition={{
                  delay: 0.5,
                  type: 'tween',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 0.5,
                }}
              >
                {' '}
                █
              </motion.span>
            )}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Console
