import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {Link} from 'react-router-dom'


import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('/')
  return (
    <div>
    <nav className='nav_s rgb'>
      
      <Link to='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome/></Link>
      <Link to='/about' onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><AiOutlineUser/></Link>
      <Link to='/skills' onClick={() => setActiveNav('/skills')} className={activeNav === '/skills' ? 'active' : ''}><BiBook/></Link>
      <Link to='/services' onClick={() => setActiveNav('/services')} className={activeNav === '/services' ? 'active' : ''}><RiServiceLine/></Link>
      <Link to='/contact' onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><BiMessageSquareDetail/></Link>
      
    </nav>
    </div>
  )
}

export default Nav