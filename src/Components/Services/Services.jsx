import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../../img/glasses.png'

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique, ea velit
          <br/>
          sequi doloremque
        </span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className="blur s-blurl" style={{background:'#abf1ff94'}}></div>
      </div>
      {/* right side */}
      <div className="cards">
          <div style={{left:'14rem'}}>
            <Card
              emoji = {HeartEmoji}
              heading={'Design'}
              detail = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
              />
          </div>
          {/* second card */}
          <div style={{top:'12rem', left:'-4rem'}}>
            <Card
              emoji={Glasses}
              heading={'Developer'}
              detail = {'Html, CSS, JavaScript, React'}
            />
          </div>
          {/* 3rd */}
          <div style={{top:'19rem', left:'12rem'}}>
            <Card
              emoji={Humble}
              heading={'UI/UX'}
              detail = {'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
            />
          </div>
          <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services