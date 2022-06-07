import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const HomeSocial = () => {
  return (<>
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/khalid-khan-a93481202' target="_blank" rel='noreferrer'><FaLinkedin/></a>
        <a href='https://github.com/khalid9996' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://www.facebook.com/people/Khalid-Khan/100010028379991/' target="_blank" rel='noreferrer'><FaFacebook/></a>
        <a href='https://www.instagram.com/real_khalid_khan/' target="_blank" rel='noreferrer'><FaInstagram/></a>
    </div>
    </>
  )
}

export default HomeSocial