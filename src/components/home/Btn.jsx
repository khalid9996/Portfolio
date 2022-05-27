import React from 'react'
import CV from '../../assets/CV.jpg'

function CTA() {
  return (
    <div className='hbtn'>
        <a href={CV} download className='btn6__h btn'>Download CV</a>
        <a href="/contact" className='btn6__h  btn'>Let's Talk</a>
    </div>
  )
}

export default CTA