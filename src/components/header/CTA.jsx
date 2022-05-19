import React from 'react'
import CV from '../../assets/CV.jpg'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn6 btn'>Download CV</a>
        <a href="#contact" className='btn6 btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA