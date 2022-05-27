import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const HomeSocial = () => {
  return (<>
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" rel='noreferrer'><FaLinkedin/></a>
        <a href='https://github.com' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://facebook.com' target="_blank" rel='noreferrer'><FaFacebook/></a>
        <a href='https://instagram.com' target="_blank" rel='noreferrer'><FaInstagram/></a>
    </div>
    </>
  )
}

export default HomeSocial