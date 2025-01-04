import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import RegionList from './Pages/RegionList'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/region/:regionName" element={<RegionList/>} />
      </Routes>
    </Router>
  )
}

export default App