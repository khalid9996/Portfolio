import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me rgb">
          <div className="about__me-image">
            <img src={ME} alt='about'></img>
          </div>
        </div>
      

        <div className="about__content">
          <div className="about__cards">

            <article className='btn6 about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='btn6 about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='btn6 about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
            
          </div>
          <div className='box'>
            <div className='content'>
            <p>Full-Stack Web Developer with skills to build end-to-end web applications. Experience on creating Front-end and Back-end code from scratch or by utilizing a handful of frameworks and libraries. Motivated by the innovations of technology and a passion for constant learning. Striving for efficient, beautiful code, delivered on time, and the satisfaction of customers with the product created.</p>
            </div></div>
            <Link to='/contact' className='btn btn6'>Let's Talk</Link>

        </div>
      </div>

    </section>
  )
}

export default About