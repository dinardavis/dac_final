import React from 'react'
import { NavHashLink } from "react-router-hash-link"
import { debounce } from '../utilities/helpers'
import DesktopNavbar from '../Navigation/DesktopNavbar'
import MobileNavbar from '../Navigation/MobileNavbar'
import MenuItems from '../Navigation/MenuItems';
import { menuItemData } from '../../Data/menuItemData';
import mainLogo from "../../assets/imgs/logo.png"

export default function Header() {
  const [prevScroll, setPrevScroll] = React.useState(0) 
  const [visible, setVisible] = React.useState(true)
  const [mobileNavState, setMobileNavState] = React.useState(false)
  const [desktopNav, setDesktopNav] = React.useState(true)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const [menuData, setMenuData] = React.useState(menuItemData)


  function toggleDropdown(id) {
    setMenuData(prevData => prevData.map(data => {
      return data.id === id ? 
        {...data, showMenu: !data.showMenu} : data
    }))
  }

  function toggleMobileMenu() {
    setMobileNavState(prevNav => !prevNav)
  }

  const handleScroll = debounce(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop === 0) {
      setVisible(true)
    } else if(scrollTop !== 0 && scrollTop < 700) {
      if (scrollTop > prevScroll) {
          setVisible(false)
      } else {
        setVisible(true)
      }  
    } else if(scrollTop > 700 ) {
      setVisible(true)
    } 
    setPrevScroll(scrollTop)
  }, 10)

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)

    if(windowWidth < 800) {
      setDesktopNav(false)
    } else if(windowWidth > 800) {
      setDesktopNav(true)
      setMobileNavState(false)
    }
  }, [windowWidth])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScroll, visible, handleScroll])

  const styles = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    marginTop: '.5rem',
    zIndex: '100',
    width: '98%',
    transition: 'top 0.3s',
  }

  React.useEffect(() => {
    if(mobileNavState) {
      document.body.classList.add('fixed-position')
    } else {
      document.body.classList.remove('fixed-position')
    }
  }, [mobileNavState])

  const menuItems = menuData.map((menu, index) => {
    return <MenuItems
            key={index}
            items={menu}
            mobileNavState={mobileNavState}
            toggleDropdown={() => toggleDropdown(menu.id)}
          />
  })


  return (
    <header className={`nav-container ${prevScroll === 0 || mobileNavState ? "no-background" : "nav-shadow"}`} style = {{...styles, top: visible ? '0px' : '-120px', backgroundColor: mobileNavState ? "transparent" : ""}}>
    <NavHashLink to="/#">
      <img className="nav-logo" onClick={() => setMobileNavState(false)} src={mainLogo} alt="DAC Logo" />
    </NavHashLink>      
      {desktopNav ?  
      <DesktopNavbar
        menuItems={menuItems}
      />: 
      <MobileNavbar
        mobileNavState={mobileNavState}
        toggleMobileMenu={toggleMobileMenu}
        menuItems={menuItems}
      />}
    </header>
  )
}