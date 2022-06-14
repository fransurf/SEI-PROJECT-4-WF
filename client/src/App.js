import { useEffect, useState } from 'react'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components

import NavBar from './components/common/navBar'
import LandingPage from './components/landingPage/landingPage'
import LandingPageSelection from './components/landingPage/landingPageSelection'
import BoardsCarousel from './components/boards/boardsCarousel'
import BoardsTerrain from './components/boards/boardsTerrain'
import BoardsAdvice from './components/boards/boardsAdvice'


const App = () => {


  return (
    <main className='main-container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/selection" element={<LandingPageSelection />} />

          {/* BOARDS PAGES */}
          <Route path="/boards" element={<BoardsCarousel />} />
          <Route path="/boards/:type" element={<BoardsTerrain />} />
          <Route path="/boards/advice" element={<BoardsAdvice />} />

          {/* Advice page - super easy - expanding divs */}

          {/* AUTHENTICATION PAGES */}
          {/* Register */}
          {/* Login */}

          {/* PRELOVED BOARDS PAGES */}
          {/* FORM - preloved boards */}
          {/* FORM - preloved index */}

        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
