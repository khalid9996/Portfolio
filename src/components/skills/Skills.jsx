import React from 'react'
import Blockoption from './Blockoption'

import './skills.css'


const Skills = () => {
  return (
      <>
      <Blockoption/> 
    <div className='heading'>
      <h5>Compétences</h5>
      <h2>Skills</h2>
    </div>

    <section className='section1' id="coding">
      <div className='section2'>
        <h2>Coding</h2>
        <p>JAVA Python JavaScript</p>
      </div>
    </section>

    <section className='section1' id="webdevelopment">
      <div className='section2'>
        <h2>Web Development</h2>
        <p>HTML CSS JAVASCRIPT NODE REACT DJANGO</p>
      </div>
    </section>

    <section className='section1' id="graphicsdesign">
      <div className='section2'>
        <h2>Graphics Design</h2>
        <p>JAVA Python JavaScript</p>
      </div>
    </section>

    <section className='section1' id="#videography">
      <div className='section2'>
        <h2>Videography</h2>
        <p>JAVA Python JavaScript</p>
      </div>
    </section>

    <section className='section1' id="#3d">
      <div className='section2'>
        <h2>3D</h2>
        <p>JAVA Python JavaScript</p>
      </div>
    </section>
    
    </>
  )
}

export default Skills