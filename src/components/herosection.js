import React from 'react'
import '../App.css'
import { Button } from './button'
import './herosection.css';

function Herosection() {
  return (
    <div className="hero-container">
      <video src='/video/video (2160p) (1).mp4' autoPlay loop muted/>
      <h1>Digital Transformation 101</h1>
      <p>Let's go !</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>WATCH TRAILER <i className='far fa-play-circle' /></Button>
      </div>
    </div>
  )
}

export default Herosection;
