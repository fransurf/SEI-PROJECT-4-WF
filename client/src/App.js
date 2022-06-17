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
import Register from './components/auth/register'
import Login from './components/auth/login'
import PrelovedBoards from './components/preloved/prelovedBoards'
import AddPreloved from './components/preloved/addPreloved'
import EditPreloved from './components/preloved/editPreloved'


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

          {/* AUTHENTICATION PAGES */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Login */}

          {/* PRELOVED BOARDS PAGES */}
          <Route path="/preloved" element={<PrelovedBoards />} />
          <Route path="/preloved/add" element={<AddPreloved />} />
          <Route path="/preloved/ed" element={<EditPreloved />} />


        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
