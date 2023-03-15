import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Console from './components/Console'

function App() {
  return (
    <Container>
      <Console></Console>

      <Link to={'resume'}>
        <Typography
          variant="h1"
          component="span"
          sx={{
            color: '#F5DFFB',
            textDecoration: 'none',
            fontWeight: '500',
            backgroundColor: 'rgba(209, 70, 205, 0.0)',
            '&:hover': {
              boxShadow: 9,
              backgroundColor: 'rgba(209, 70, 205, 0.4)',
              transition: 'backgroundColor, 500ms',
            },
          }}
        >
          View Resume
        </Typography>
      </Link>
    </Container>
  )
}

export default App
