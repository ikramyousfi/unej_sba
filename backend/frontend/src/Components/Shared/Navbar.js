import React from 'react'
import './Navbar.css'
import Logo from '../../Images/Logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div >
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <img src={Logo} alt="" />
          </div>
        <div className="flex-none">
          <ul className="menu-nav">
            <li>  
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='Presentation'>Presentation</Link>
            </li>
            <li>
              <Link to='Project'>Articles</Link>
            </li>
            <li>
              <Link to='Adhesions'>Adhesion</Link>
            </li>
            <li>
              <Link to='Contact'>Contact us</Link>
            </li>
          </ul>
          <Link to='Login' className='Login'>Login</Link>
        </div>
        </div>
      </div>
  )
}

export default Navbar