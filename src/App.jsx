import { useState } from 'react'
import Home from './pages/Home'
import TravelPlan from './pages/TravelPlan'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TravelPlan/>
    </>
  )
}

export default App
