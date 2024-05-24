import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./Images/Alumination.jpg'
              text="IIT Bombay's grandest student-alumni fest. 
              This two-day extravaganza aims to quench your
               thirst for knowledge, harness the 
               wisdom of our esteemed alumni, and create
                a bridge between students and our vast alumni network."
              label='Alumination'
              path='https://alumination.sarc-iitb.org'
            />
            <CardItem
              src='./Images/ASMP.jpg'
              text='Alumni Student Mentorship Program (ASMP)
               aims to build a continuous 
               interactive dialogue between 
               the students of IITB and its alumni.'
              label='Alumni Student Mentorship Program'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./Images/ILP.jpg'
              text="The Industrial Learning Program (ILP), by SARC is Back! ILP is offering internships and projects with esteemed alumni. 
              Don't fall back, connect with industry experts as this is a great opportunity to get your foot in the door and learn from the best."
              label='Industrial Learning Program'
              path='https://ilpsummer.sarc-iitb.org/#'
            />
            <CardItem
              src='./Images/shadow.jpg'
              text='Acquaint yourself with perspective-changing
               work environments and the gritty challenges of the industry through
                interactive sessions with the top management and actual workplaceon 
                Top of the Himilayan Mountains'
              label='Shadow Program'
              path='/products'
            />
            <CardItem
              src='./Images/classsong.jpg'
              text="The moment you've been counting down to is now here. 
              SARC presents the Class song of 2023, a tribute
               to the memories and friendships created at this 
               prestigious institution"
              label='Class Song'
              path='https://www.youtube.com/watch?v=PlUA6yK-xqs&pp=ygUPY2xhc3Mgc29uZyBpaXRi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;