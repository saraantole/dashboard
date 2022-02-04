import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './style/theme'
import Box from '@mui/material/Box'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.bg} display="flex" justifyContent="center" sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
