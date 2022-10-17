import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  // emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // emiljs

  return (
    <div className='contact-form'>
      <div className="m-left">
        <div className="span">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blurl" style={{background:'#abf1ff94'}}></div>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input type="text" name='user_name' className='user' placeholder='Name'/>
          <input type="email" name='user_email' className='user' placeholder='Email'/>
          <textarea name="message" className='user' placeholder='Message'/>
          <input type="submit" value='Send' className='button'/>
          <div className="blur c-blur1" style={{background: 'var(--purple'}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact