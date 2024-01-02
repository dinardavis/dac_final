import React from 'react';

export default function MobileNav(props) {

  React.useEffect(() => {
    if(props.mobileNavState) {
      document.body.classList.add('fixed-position')
    } else {
      document.body.classList.remove('fixed-position')
    }
  }, [props.mobileNavState])

  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={props.toggleMobileMenu} >
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : "burger-box-shadow"}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
        <div className={`burger-lines ${props.mobileNavState? "animate-burger" : ""}`}></div>
      </div>

      <div className={`mobile-nav-container ${props.mobileNavState ? "show-mobile-nav" : ""}`} onClick={props.toggleMobileMenu}>
        {props.menuItems}
      </div>
    </div>
    
  )
}