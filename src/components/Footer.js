import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import footerLeft from "../assets/imgs/graphics/footer_left.png"
import footerRight from "../assets/imgs/graphics/footer_right.png";



export default function Footer() {
  return (
    <footer className='footer'>
      <img src={footerLeft} className="section-graphic footer-graphic-left" alt='circle graphic' />
      <img src={footerRight} className="section-graphic footer-graphic-right" alt='circle graphic' />
      <div className='footer-content'>
        <div className='footer-left'>
          <ul className='footer-left-top'>
            <p className='footer-category'>About</p>
            <Link to="/" className='footer-link'>About DAC</Link>
            <Link to="/" className='footer-link'>Mission</Link>
            <Link to="/" className='footer-link'>Board of Directors</Link>
            <Link to="/" className='footer-link'>Staff</Link>
          </ul>

          <ul className='footer-left-middle'>
            <p className='footer-category'>Programs</p>
            <Link to="/" className='footer-link'>Corridor</Link>
            <Link to="/" className='footer-link'>First Call For Families</Link>
            <Link to="/" className='footer-link'>In-house Social Workers</Link>
            <Link to="/" className='footer-link'>Legal Services</Link>
            <Link to="/" className='footer-link'>Mentor Parent Program</Link>
          </ul>

          <ul className='footer-left-bottom'>
            <Link to="/" className='footer-link'>Know Your Rights</Link> 
          </ul>
        </div>

        <div className='footer-right'>
          <ul className='footer-right-top'>
            <Link to="/" className='footer-link'>Contact</Link>
            <Link to="/" className='footer-link'>Employment & Volunteering</Link>
          </ul>

          <ul className='footer-right-middle'>
            <Link to="/">31 N. Second Street, Suite 300<br/> San Jose, CA 95113</Link>
            <Link to="/" className='footer-link'>Main: 408-995-0714</Link>
            <Link to="/" className='footer-link'>Fax: 408-516-3812</Link>
            <Link to="/" className='footer-link'>dac@sccdac.org</Link>
          </ul>

          <ul className='footer-right-bottom'>
            <Link to="/"><TiSocialLinkedin className="footer-social-icons" /></Link>
            <Link to="/"><TiSocialInstagram className="footer-social-icons" /></Link>
            <Link to="/"><TiSocialTwitter className="footer-social-icons" /></Link>
          </ul>
        </div>
      </div>
      <ul className='footer-mobile-social'>
            <Link to="/"><TiSocialLinkedin className="footer-social-icons" /></Link>
            <Link to="/"><TiSocialInstagram className="footer-social-icons" /></Link>
            <Link to="/"><TiSocialTwitter className="footer-social-icons" /></Link>
          </ul>
      <p className='copyright'>&copy; {new Date().getFullYear()} Dependency Advocacy Center</p>
    </footer>
  )
}