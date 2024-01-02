import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/whatwedo_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/whatwedo_left.png"
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import BackButton from "../BackButton";

export default function KnowYourRights() {
  return (
    <section className='section single-page-layout kyrights-section' id="know-your-rights">
      <BackButton />
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
      <div className='kyrights-content single-page-content programs-intro position-center'>
        <h1 className='kyrights section-header single-page-header'>Know Your Rights - Coming Soon</h1>
        <p className='diversity-copy copy'>Please contact our prevention programs (First Call For Families and Corridor) by phone for information and advice tailored to your individual situation.</p>
        <ul>
          <li className='copy'> First Call Warm Line – <Link className='link-blue-text'>408-856-2992</Link></li>
          <li className='copy'>Corridor Intake – <Link className='link-blue-text'>408-564-5142</Link></li>
        </ul>
        <p className='diversity-copy copy'>Or select your desired program to contact <NavHashLink to="/#contact" className="link-blue-text">here</NavHashLink>.</p>
      </div>
    </section>
  )
}