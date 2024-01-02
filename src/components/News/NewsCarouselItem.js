import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidRightArrow } from 'react-icons/bi'


export default function NewsCarouselItem(props) {

  return (
      <div className='carousel-item' style={props.styles}>
        <Link to={`${props.url}/${props.id}`} className='carousel-item-link' >
        <img className='carousel-item-img' src={props.img} alt={props.imgDesc} />
        <h1 className='carousel-item-header'>{props.title}</h1>
        <p className='carousel-item-summary'>{props.body[0].slice(0,150)}<span>{props.body[0].length > 149 ? "..." : ""}</span></p>
        </Link>
        <Link to={`${props.url}/${props.id}`} className='carousel-item-readmore' >
          <p className='link-blue-text'>Read More</p><BiSolidRightArrow />
        </Link>
      </div>
  )
}