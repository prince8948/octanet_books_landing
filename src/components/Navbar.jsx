import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaGoogle, FaLinkedin, FaUser } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <>
      <header className='headerIcons'>
        <ul className='socialIcons'>
          <li>
            <NavLink to="hhts://www.facebook.com" className="icons">{<FaFacebook />} </NavLink>
          </li>
          <li>
            <NavLink to="hhts://www.facebook.com" className="icons">{<FaTwitter />} </NavLink>
          </li>
          <li>
            <NavLink to="hhts://www.facebook.com" className="icons">{<FaInstagram />} </NavLink>
          </li>
          <li>
            <NavLink to="hhts://www.facebook.com" className="icons">{<FaLinkedin />} </NavLink>
          </li>
          <li>
            <NavLink to="hhts://www.facebook.com" className="icons">{<FaGoogle />} </NavLink>
          </li>
          <li>
            <NavLink to="hhts://www.facebook.com" className="icons register">Register</NavLink>
            <NavLink to="hhts://www.facebook.com" className="icons login">Login</NavLink>
          </li>
        </ul>
      </header>
      {/* navbar */}
      <nav>
        <div className="logo">
          <img to="" alt="" />Auther
        </div>
        <ul className='menu'>
          <li>
            <NavLink to="/" className="menulist">Home</NavLink>
          </li>
          <li>
            <NavLink to="/" className="menulist">Feature</NavLink>
          </li>
          <li>
            <NavLink to="/" className="menulist">Page</NavLink>
          </li>
          <li>
            <NavLink to="/" className="menulist">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/" className="menulist">Event</NavLink>
          </li>
          <li>
            <NavLink to="/" className="menulist">Blog</NavLink>
          </li>
        </ul>

        <div className="menuIcons">
          <ul>
            <li>
              {<FaSearch />}
            </li>
            <li>
              {<FaShoppingCart />}
            </li>
            <li>
              {<FaUser />}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar