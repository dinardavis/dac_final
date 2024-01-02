import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import NewsCarousel from '../News/NewsCarousel';
import newsGraphic from "../../assets/imgs/graphics/news_graphic.png"

export default function NewsHome() {
  return (
    <section id="news" className="news-section section">
      <img src={newsGraphic} className="news-graphic-home section-graphic" alt='' />
      <h1 className='section-header news-header'>Find Out What DAC Has Been Up To</h1>

        <NewsCarousel />

        <div className='news-footer'>
          <div className='news-social-links'>
            <p className='news-social-copy'>Follow Us On Social Media: </p>
            <div className='news-socials-container'>
              <Link to="https://www.linkedin.com/company/dependency-advocacy-center/"><TiSocialLinkedin className="news-social-icons" /></Link>
              <Link to="https://www.instagram.com/dac_org"><TiSocialInstagram className="news-social-icons" /></Link>
              <Link to="https://twitter.com/dac_org"><TiSocialTwitter className="news-social-icons" /></Link>
            </div>
          </div>
          <Link to="/updates-articles">
            <button className='news-viewall-btn cta-btn btn-hover'>View All</button>
          </Link>
        </div>
    </section>
  )
}