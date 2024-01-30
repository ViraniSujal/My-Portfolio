import { useState } from 'react'
import React from 'react'
import './navbar.css'
import logo from '../../../src/assets/Slogo.png'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <nav className="Navbar">
      <Link to='intro'  spy={true} smooth={true} offset={-100} activeClass='imgL' >
      <img src={logo} alt="Logo" className='logo' />
      </Link>




      <div className="desktopMenu" >
        <Link activeClass='active' spy={true} smooth={true} offset={-100} to='intro'  className="desktopMenuListItem" >Home</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-80} to='about'  className="desktopMenuListItem"  >About</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-50} to='skills'  className="desktopMenuListItem"  >Skills</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-50} to='education'  className="desktopMenuListItem"  >Education</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-30} to='projects'  className="desktopMenuListItem" >Projects</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-30} to='contact'  className="desktopMenuListItem"  >Contact</Link>
      </div>


      <div className='SocialIcon'>
        <a href="https://www.linkedin.com/in/sujal-virani-86104827b/">
      <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/ViraniSujal">
      <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/sujal.virani.376">
      <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/svirani47/">
      <i className="fa-brands fa-instagram"></i>
        </a>
    </div>




     {/* burgur manu */}
    <button className='mobMenu' id='menu' >
    <i class="fa-solid fa-bars" onClick={() => setShowMenu(!showMenu)} ></i>
    </button>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}} >
        <Link activeClass='active' spy={true} smooth={true} offset={-100} to='intro'  className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-55} to='about'  className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-40} to='skills'  className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-35} to='education'  className="listItem" onClick={() => setShowMenu(false)}>Education</Link>
        <Link activeClass='active' spy={true} smooth={true} offset={-30} to='projects'  className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' spy={true} smooth={true}  to='contact'  className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
    </>
  )
}
export default Navbar
