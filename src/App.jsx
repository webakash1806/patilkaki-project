import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import About from './Pages/About'
import WhyWePage from './Pages/WhyWePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/whyWe' element={<WhyWePage />} />
    </Routes>
  )
}

export default App
