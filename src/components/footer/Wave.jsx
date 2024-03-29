import React from 'react'
import './wave.css'

const Wave = () => {
  return (
    // <div className='wave'></div>
    <>
    <div className="wave__bg">


      <g><path fill="#fff"
      d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4
      C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1
      c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7		c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2	c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
      </g>
      
      


      {/* <!--Waves Container--> */}
      <div>
        <svg className="waves_effect" 
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use href="#gentle-wave" x="48" y="0" fill="rgba(169, 16, 121,0.7" />
        <use href="#gentle-wave" x="48" y="3" fill="rgba(169, 16, 121,0.5)" />
        <use href="#gentle-wave" x="48" y="5" fill="rgba(169, 16, 121, 0.3)" />
        <use href="#gentle-wave" x="48" y="7" fill="#2E0249" />
        </g>
        </svg>
      </div>
      {/* <!--Waves end--> */}
      </div>
    </>
  )
}

export default Wave