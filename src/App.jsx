// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TravelPlan from './pages/TravelPlan'
import Search from './components/Search.jsx'
import Profile from './pages/Profile.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-plan" element={<TravelPlan />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App
