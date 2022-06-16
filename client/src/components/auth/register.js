import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Register = () => {

  // Call useNavigate() in order to use later
  const navigate = useNavigate()

  // * State for user form data
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    profile_pic: 'xxx',
    password: '',
    password_confirmation: '',
  })
  
  // State that will track specific errors for each field
  const [ errors, setErrors ] = useState({})


  // * State that tracks form edits
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // * Post form info to /register endpoint on submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      console.log('REGISTRATION SUCCESSFUL -->', formData)

      navigate('/login')
      // ^ post the form data and navigate to login page

    } catch (error) {
      console.log('Full error object -->', error)
      console.log('Error response from API -->', error)
      console.log('Errors object on specific data key -->', error)
      setErrors(error.response.data.errors)
    }
  }

  return (
    <section className='form-page'>
      <Container>
        <Row>
          <form className='registration-form' onSubmit={handleSubmit}>
            <h1>Register</h1>
            {/* Username */}
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' className='input' placeholder='Username' value={formData.username} onChange={handleChange} />
            {errors.username && <p className='text-danger'>{errors.username}</p> }
            {/* Email */}
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='input' placeholder='Email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email}</p> }
            {/* Password */}
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' className='input' placeholder='Password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password}</p> }
            {/* Password Confirmation */}
            <label htmlFor='password_confirmation'>Password Confirmation</label>
            <input type='password' name='password_confirmation' className='input' placeholder='Password Confirmation' value={formData.password_confirmation} onChange={handleChange} />
            {errors.password_confirmation && <p className='text-danger'>{errors.password_confirmation}</p> }
            {/* Submit */}
            <button type="submit" className="submit-btn">Register</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}

export default Register