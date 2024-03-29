import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated } from '../helpers/auth'


const NavBar = () => {

  const navigate = useNavigate()

  // Function to remove token and navigate to landing page
  const handleLogout = () => {
    window.localStorage.removeItem('women-that-shred')
    // ^ removes token
    navigate('/')
  }

  return (
    <header>
      <nav id='navbar'>
        <Link to="/advice" className="logo">Advice</Link>
        <Link to="/selection" className="logo">Boards</Link>
        <Link to="/" className="logo">WTS</Link>
        <Link to="/preloved" className="logo">Preloved</Link>

        {/* SHOW 'LOGIN' WHEN LOGEED OUT & 'LOGOUT' WHEN LOGGED IN */}
        {userIsAuthenticated() ?
          <>
            <Link onClick={handleLogout} to='' className="logo" alt='Logout'>Logout</Link>
          </>
          :
          <>
            <Link to="/login" className="logo" alt='Login'>Login</Link>
          </>

        }
        
      </nav>
    </header>

  )
}

export default NavBar