import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Console from './components/Console'

function App() {
  return (
    <Container>
      <Console></Console>

      <Link to={'resume'} sx={{ color: '#ffffff' }}>
        <Typography
          variant="subtitle1"
          color="#000000"
          component="span"
          sx={{
            textDecoration: 'none',
            fontFamily: 'Space Mono, monospace',
            fontWeight: '500',
            width: '10vw',
          }}
        >
          view resume
        </Typography>
      </Link>
    </Container>
  )
}

export default App
