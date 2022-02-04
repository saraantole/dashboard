import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import SignUpPage from './pages/signUp.page'
import DashboardPage from './pages/dashboard.page'
import { useState } from 'react'

function App() {
  const [currentAccount, setCurrentAccount] = useState(null)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="signup" />} />
        <Route path="signup" exact element={<SignUpPage currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />} />
        <Route path="dashboard" exact element={<DashboardPage currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />} />
      </Routes>
    </Router>
  )
}

export default App
