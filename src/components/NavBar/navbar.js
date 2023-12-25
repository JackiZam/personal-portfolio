import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './navbar.css';
import Header from '../Header/header';
import AboutMe from '../AboutMe/aboutme';
import { Link } from 'react-scroll';
import { findAllByTestId } from '@testing-library/react';
import MenuIcon from "../../../src/assets/images/chevron-down.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className='navbar'>
          <Link to='header' spy={false} smooth={true} offset={0} duration={500} className='nameLink'>Jacqueline Zamitalo</Link>
          <div className='desktopMenu'>
            {/* <Link to="/" className='navbarItem'>Home</Link>
            <Link to="/AboutMe" className='navbarItem'>About Me</Link> */}
            <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-135} duration={500} className='navbarItem'>About</Link>
            {/* <Link to="/Experience" className='navbarItem'>Experience</Link>
            <Link to="/Contact" blassName='navbarItem'>Contact Me</Link> */}
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-135} duration={500} className='navbarItem'>Experience</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-150} duration={500} className='navbarItem'>Contact</Link>
          </div>
          
          <button className='navLink' onClick={()=>setShowMenu(!showMenu)}>More<img src={MenuIcon} alt="Menu" className='menuImg' onClick={()=>setShowMenu(!showMenu)}></img></button>
          <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            {/* <Link to="/" className='navbarItem'>Home</Link>
            <Link to="/AboutMe" className='navbarItem'>About Me</Link> */}
            <Link activeClass='active' to='header' spy={true} smooth={true} offset={-135} duration={500} className='dropdownItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-135} duration={500} className='dropdownItem' onClick={() => setShowMenu(false)}>About</Link>
            {/* <Link to="/Experience" className='navbarItem'>Experience</Link>
            <Link to="/Contact" blassName='navbarItem'>Contact Me</Link> */}
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-135} duration={500} className='dropdownItem' onClick={() => setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-150} duration={500} className='dropdownItem' onClick={() => setShowMenu(false)}>Contact</Link>
          </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar