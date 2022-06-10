import { useEffect, useState } from 'react'
import axios from 'axios'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components

import NavBar from './components/common/navBar'
import LandingPage from './components/landingPage/landingPage'
import BoardsCarousel from './components/boards/boardsCarousel'


const App = () => {

  const [boards, setBoards] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getBoards = async () => {
      try {
        const { data } = await axios.get('/api/boards/') 
        console.log('🏆 Got the boards data!', data)

        setBoards(data)

      } catch (error) {
        console.log('🥺 error getting your board data 🥺', error)
        setErrors(true)
      }
    }

    getBoards()
  }, [])


  return (
    <main className='main-container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Boards pages */}
          <Route path="/boards" element={<BoardsCarousel />} />

        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
