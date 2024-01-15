import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container ms-3 mt-4">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item mx-4">
                    <Link to="/main" className="nav-link text-home">Home</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link to="/add-recipe" className="nav-link text">Add Recipe</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link to="/profile" className="nav-link text">Profile</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar