import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const BoardsTerrain = () => {

  // const { terrain } = useParams()
  // console.log('🧐 these are your params', terrain)

  const [boards, setBoards] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    console.log('🥐 HERE\'S A REQUEST FOR DATA')
    // A function to collect board info
    const getBoards = async () => {

      try {
        const { data } = await axios.get('/api/boards')
        console.log('🥸 Let\' have a look at that data', data)

        setBoards()

      } catch (error) {
        console.log('😖 HERE ARE YOUR ERRORS ->', error)
        setErrors(true)
      }
    }
    getBoards()
  }, [])


  return (
    <h1>This is your terrain page</h1>
  )

}

export default BoardsTerrain