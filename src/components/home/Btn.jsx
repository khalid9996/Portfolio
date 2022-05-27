import React from 'react'
import CV from '../../assets/CV.jpg'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className='hbtn'>
        <a href={CV} download className='btn6__h btn'>Download CV</a>
        <Link to="/contact" className='btn6__h  btn'>Let's Talk</Link>
    </div>
  )
}

export default CTA