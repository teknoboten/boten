import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalThemeOverride } from './GlobalThemeOverride'
import App from './App'
import ErrorPage from './routes/Error'
import './index.css'
// import Resume from './components/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: 'resume',
  //   element: <Resume />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalThemeOverride}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
