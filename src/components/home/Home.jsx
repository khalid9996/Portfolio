import React from 'react'
import './home.css'
import Btn from './Btn'
import ME from '../../assets/ME.jpg'
import HomeSocial from './HomeSocial'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='h5__color'>Hello I'am</h5>
        <h1>Mohd Khalid Khan</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Btn/>
        <HomeSocial/>
        <div className="me">
          <img src={ME} alt='me'></img>
        </div>
        <Link to='/contact' className='scroll__down'>Contact ~</Link>

      </div>
    </header>
  )
}

export default Home