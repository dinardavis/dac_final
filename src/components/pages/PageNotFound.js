import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/whatwedo_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/whatwedo_left.png"
import { Link } from 'react-router-dom';


export default function PageNotFound() {
  return (
    <section className='section single-page-layout not-found-section'>
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
      <div className='not-found-content single-page-content programs-intro position-center'>
        <h1 className='not-found section-header'>404</h1>
        <h2 className='not-found section-subhead'>Sorry, Page Not Found</h2>
        <p className='not-found copy'>The page you requested could not be found</p>
        <Link to="/" className="not-found-btn btn-hover">
        Take Me Home
      </Link>
      </div>
    </section>
  )
}