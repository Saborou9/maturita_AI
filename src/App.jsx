import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './frontend/LandingPage'
import SignUp from './frontend/components/SignUp'

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen m-0 p-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
