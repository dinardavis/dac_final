import React from 'react';

export default function DesktopNavbar(props) {

  return (     
    <nav className='nav-links'>
      {props.menuItems}
    </nav>
  )
}