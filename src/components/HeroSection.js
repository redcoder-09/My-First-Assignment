import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/SarcIntro1.mp4' autoPlay loop muted />
      <h1>Welcome to the Webpage of SARC IITB</h1>
      <p>SARC is an institute student body run by the students and 
        committed to enhancing the relationship between students and 
        alumni of IIT Bombay. The organisation functions with a vision 
        to develop a dynamic student-alumni community dedicated to 
        making connections and strengthening ties between the students
         and the alumni.</p>
    </div>
  );
}

  
export default HeroSection;
