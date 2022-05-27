import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <Link to="/" className='footer__logo rgb'>real khalid</Link>
      <ul className='footer__links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <div className="footer__socials">
        <a href='http://facebook.com' className='rgb'><FaFacebookF/></a>
        <a href='http://instagram.com' className='rgb'><FiInstagram/></a>
        <a href='http://github.com' className='rgb'><AiFillGithub/></a>
        <a href='http://linkedin.com' className='rgb'><AiFillLinkedin/></a>
      </div>
      <div className="footer__copyright"><small>&copy; REAL KHALID. All rights reserved</small></div>
    </footer>
  )
}

export default Footer