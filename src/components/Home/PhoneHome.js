import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import newsGraphic from "../../assets/imgs/graphics/phone_graphic.png"

export default function PhoneHome() {
  return (
    <section id="phone" className="phone-section section">
      {/* <img src={newsGraphic} className="phone-graphic-home section-graphic" alt='' /> */}
      <div className='phone-copy-container'> 
        <p className='copy phone-copy'>If you<span className='copy-bold'> <span className='phone-copy-underline'>have</span> a court case</span> in Santa Clara County that involves CPS (Department of Family and Children's Services) and need legal representation:
        </p>
     
        <NavHashLink className="phone-btn" to="tel:+1408-995-0714" target="_blank"> Call Us - (408) 995-0714</NavHashLink>
      </div>

      <div className='phone-copy-container'>
        <p className='copy phone-copy'>If you <span className='copy-bold'> <span className='phone-copy-underline'>do not have</span> a court case</span>, but have been contacted by Santa Clara County CPS (Department of Family and Children's Services) and need legal advice:</p>

        <NavHashLink className="phone-btn desktop" to="tel:+1408-856-2992" target="_blank"> Call Our Warm Line - (408) 856-2992</NavHashLink>

        <NavHashLink className="phone-btn mobile" to="tel:+1408-856-2992" target="_blank"> Call Our Warm Line - <br></br>(408) 856-2992</NavHashLink>
      </div>
     
      
    </section>
  )
}