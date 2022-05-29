import React from 'react'
import './home.css'
import Btn from './Btn'
import ME from '../../assets/ME.jpg'
import HomeSocial from './HomeSocial'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='view'>
    <header>
      <div className="container header__container">
      <h5 className='h5__color'>Bonjour je suis</h5>
        <h5 className='h5__color'>Hello I'am</h5>
        <h1>Mohd Khalid Khan</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Btn/>
        <HomeSocial/>
        <div className="me">
          <img src={ME} alt='me'></img>
        </div>
        <span className='space'></span>
        <Link to='/contact' className='scroll__down'>Contact ~</Link>

      </div>
    </header>
    </div>
  )
}

export default Home