import React from 'react';
import '../../App.css';
import { Button } from '../button';
import './contact.css';

export default function Contact() {

  return (

  <section>
    <div className='contact-container'>
      <h1>Contact Us</h1>
      <form className='form-type'>
        <input type='text' placeholder='Full Name'name='user_name' required />
        <input type='email' placeholder='Email'name='user_email' required />
        <input type='text' placeholder='Subject'name='subject' required />
        <textarea type='text' placeholder=''name='message' required />
        <Button buttonStyle='btn--primary'>Send Message</Button>
        </form>
    </div>
  </section>
  )
}
