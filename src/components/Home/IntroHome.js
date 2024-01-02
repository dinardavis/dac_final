import React from 'react';
import introImage from "../../assets/imgs/mom_son_intro.jpg"
import rightGraphic from "../../assets/imgs/graphics/intro_right.png"
import bottomGraphic from "../../assets/imgs/graphics/intro_bottom.png"
import { NavHashLink } from 'react-router-hash-link';

export default function IntroHome() {
  return (
    <section id='intro' className='section intro-section darkblue-linear-gradient'>
      <img src={rightGraphic} className="section-graphic intro-right" alt='circle graphic' />
      <img src={bottomGraphic} className="section-graphic intro-bottom" alt='circle graphic' />
      <img src={introImage} className='intro-img' alt="Mother holding infant son at the beach" />
      <h1 className='intro-header'>Dependency <br/>Advocacy <br/> Center</h1>
      <div className='intro-copy-container'>
        <div className='intro-line-graphic'></div>
        <p className='intro-copy'>Interdisciplinary legal services for the reunification and preservation of families in Santa Clara County's child welfare system</p>
      </div>
      <NavHashLink to="/#contact">
        <div className='intro-cta cta-btn btn-hover'>Contact Us</div>
      </NavHashLink>
      
    </section>
  )
}