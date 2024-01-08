import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";
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
            <Link to="/mission-vision" className='footer-link'>Mission & Vision</Link>
            <Link to="/staff" className='footer-link'>Staff</Link>
            <Link to="/board" className='footer-link'>Board of Directors</Link>
            <Link to="/financials" className='footer-link'>Financials</Link>
            <Link to="/impact" className='footer-link'>Impact</Link>
            <Link to="/dei" className='footer-link'>DEI at DAC</Link>
       
          </ul>

          <ul className='footer-left-middle'>
            <p className='footer-category'>Programs</p>
            <NavHashLink to="family-defense-programs/#legal-services" className='footer-link'>Legal Services</NavHashLink>
            <NavHashLink to="/family-defense-programs/#social-workers" className='footer-link'>In-house Social Workers</NavHashLink>
            <NavHashLink to="/family-defense-programs/#mentor-parents" className='footer-link'>Mentor Parent Program</NavHashLink>
            <NavHashLink to="/prevention-programs/#first-call" className='footer-link'>First Call For Families</NavHashLink>
            <NavHashLink to="/prevention-programs/#corridor" className='footer-link'>Corridor</NavHashLink>
          </ul>

          <ul className='footer-left-bottom'>
            <Link to="/know-your-rights" className='footer-link'>Know Your Rights</Link> 
          </ul>
        </div>

        <div className='footer-right'>
          <ul className='footer-right-top'>
            <NavHashLink to="/#contact" className='footer-link'>Contact</NavHashLink>
            <Link to="/careers" className='footer-link'>Employment & Volunteering</Link>
            <Link to="/donate" className='footer-link'>Donate</Link>
          </ul>

          <ul className='footer-right-middle'>
            <Link to="/#contact">31 N. Second Street, Suite 300<br/> San Jose, CA 95113</Link>
            <Link className='footer-link' to="tel:+1408-995-0714" target="_blank">Main: 408-995-0714</Link>
            <NavHashLink to="/#contact" className='footer-link'>Fax: 408-516-3812</NavHashLink>
            <NavHashLink className='footer-link' to="mailto:dac@sccdac.org" target="_blank">dac@sccdac.org</NavHashLink>
          </ul>

          <ul className='footer-right-bottom'>
            <Link to="https://www.linkedin.com/company/dependency-advocacy-center/" target="_blank"><TiSocialLinkedin className="footer-social-icons" /></Link>
            <Link to="https://www.instagram.com/dac_org" target="_blank" ><TiSocialInstagram className="footer-social-icons" /></Link>
            <Link to="https://twitter.com/dac_org" target="_blank" ><TiSocialTwitter className="footer-social-icons" /></Link>
          </ul>
        </div>
      </div>
      <ul className='footer-mobile-social'>
            <Link to="https://www.linkedin.com/company/dependency-advocacy-center/" target="_blank"><TiSocialLinkedin className="footer-social-icons" /></Link>
            <Link to="https://www.instagram.com/dac_org" target="_blank" ><TiSocialInstagram className="footer-social-icons" /></Link>
            <Link to="https://twitter.com/dac_org" target="_blank" ><TiSocialTwitter className="footer-social-icons" /></Link>
          </ul>
      <p className='copyright'>&copy; {new Date().getFullYear()} Dependency Advocacy Center</p>
    </footer>
  )
}