import React from 'react'

import { Link } from 'react-router-dom'


const NavBar = () => {


  return (
    <header>
      <nav id='navbar'>
        <Link to="/boards/advice" className="logo">Advice</Link>
        <Link to="/selection" className="logo">Boards</Link>
        <Link to="/" className="logo">WTS</Link>
        <Link to="/preloved" className="logo">Preloved</Link>

        <Link to="/login" className="logo">Login</Link>
      </nav>
    </header>

  )
}

export default NavBar