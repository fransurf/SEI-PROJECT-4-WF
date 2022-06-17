import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// Import helpers
import { userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'
const EditPreloved = () => {

  // Navigate
  const navigate = useNavigate()

  // Params
  const { id } = useParams()

  // State
  // * for the specific preloved board
  const [preloved, setPreloved] = useState(null)

  // * for the information in the form
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    board_img: '',
    price: '',
    description: '',
  })

  const [errors, setErrors] = useState({})

  // ? STATE
  // * Get the specified board & check the owner
  useEffect(() => {
    const getPreloved = async () => {
      try {
        const { data } = await axios.get(`/api/preloved/${id}`)
        setPreloved(data)
        setFormData(data)
      } catch (error) {
        console.log('preloved get.single error -->', error)
        setErrors(true)
      }
    }
    getPreloved()
  }, [id])

  // Check that current user is owner of preloved board
  useEffect(() => {

    if (preloved) {
      !userIsOwner(preloved) && navigate('/api/preloved/')
    }
  }, [preloved, navigate])

  // * Update formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // * Submit formData
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/api/preloved/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/api/preloved/')

    } catch (err) {
      console.log(err)
    }
  }

  
  return (
    <section className='form-page'>
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>
            <h1>Edit your ad</h1>
            {/* Make */}
            <label htmlFor="make">Make</label>
            <input type="text" name="make" className='input' placeholder='Make' value={formData.make} onChange={handleChange} />
            {errors.make && <p className='text-danger'>{errors.make}</p>}
            {/* Model */}
            <label htmlFor="model">Model</label>
            <input type="text" name="model" className='input' placeholder='Model' value={formData.model} onChange={handleChange} />
            {errors.model && <p className='text-danger'>{errors.model}</p>}
            {/* Image */}
            <label htmlFor="board_img">Board pic</label>
            <input type="text" name="board_img" className='input' placeholder='Image url' value={formData.board_img} onChange={handleChange} />
            {errors.board_img && <p className='text-danger'>{errors.board_img}</p>}
            {/* Price */}
            <label htmlFor="price">How much are you asking?</label>
            <input type="number" name="price" className='input' placeholder='Price' value={formData.price} onChange={handleChange} />
            {errors.price && <p className='text-danger'>{errors.price}</p>}
            {/* Description */}
            <label htmlFor="description">Briefly describe the board and its condition</label>
            <textarea name="description" className='input' placeholder='Description' value={formData.description} onChange={handleChange} />
            {errors.description && <p className='text-danger'>{errors.description}</p>}
            {/* Submit */}
            <button type="submit" className="btn w-100">Update</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}
export default EditPreloved







