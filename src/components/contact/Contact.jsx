import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_00eiwhz', 'template_ewhac4z', form.current, 'BLbfNt5VObjyN2p0W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    
      <div>
        <div className='contact__head'>
        <h5>Get in touch</h5>
        <h2>Contact</h2>
        </div>
        
        
<div className="container contact__container">
  <div className="contact__options">


    <article className="contact__option rgb">
      <MdOutlineEmail className='contact__option__icon'/> 
      <h4>Email</h4>
      <h6>khankhalid1743@gmail.com</h6>
      <a href="mailto:khankhalid1743@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
    </article>

    <article className="contact__option rgb">
      <AiOutlineInstagram className='contact__option__icon'/> 
      <h4>Message</h4>
      <h6>Instagram</h6>
      <a href="https://instagram.com/real_khalid_khan/" target='_blank' rel="noreferrer">Send a Message</a>
    </article>

    <article className="contact__option rgb">
      <BsWhatsapp className='contact__option__icon'/> 
      <h4>WhatsApp</h4>
      <h6>+91 8770 *** ***</h6>
      <a href="https://api.whatsapp.com/send?phone=918770649309" target='_blank' rel="noreferrer">Send a Message</a>
    </article>


  </div>


  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder='Your Name' required />
    <input type="email" name='email' placeholder='Your Email' required />
    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
    <button type='submit' className='btn btn6'>Send Message</button>
  </form>


</div>
</div>
    
  )
}

export default Contact