import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './frontend/LandingPage'
import SignUp from './frontend/components/SignUp'
import Login from './frontend/components/Login'
import Chat from './frontend/components/Chat'
import TutorialPage from './frontend/components/TutorialPage'

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen m-0 p-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path='/tutorial' element={<TutorialPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
