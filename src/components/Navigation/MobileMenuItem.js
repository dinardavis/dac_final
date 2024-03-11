import React from "react"
import { NavHashLink } from "react-router-hash-link"
import { HashLink } from "react-router-hash-link"
import { FaChevronDown } from 'react-icons/fa'
import Dropdown from "./Dropdown"

export default function MobileMenuItem(props) {

  return (
     props.items.title === "Contact" ?
      (
      <NavHashLink
        to={props.items.url}
        className="nav-list-item nav-item nav-item-title"
        onClick={props.toggleMobileMenu}
      >
        {props.items.title}
      </NavHashLink>
      )
      : 
      props.items.submenu ? 
        props.items.title === "Resources" ? 
        (
          <div
            className={`${props.items.showMenu ? "dropdown-isActive" : ""} nav-item-dropdown nav-item`}
          >
            <div className="nav-item-title">
              {props.items.title} {props.mobileNavState && <FaChevronDown   className="mobile-dropdown-arrow"
              onClick={props.toggleMobileDropdown}
              />}</div>
                <Dropdown 
                  positionRight={true}
                  showMenu={props.items.showMenu}
                  submenus={props.items.submenu}
                  toggleMobileMenu={props.toggleMobileMenu}
                />
            </div>
          )
        :
        (
        <div
           className={`${props.items.showMenu ? "dropdown-isActive" : ""} nav-item-dropdown nav-item`}
        >
            <div className="nav-item-title">{props.items.title} {props.mobileNavState && 
            <FaChevronDown 
              className="mobile-dropdown-arrow" 
              onClick={props.toggleMobileDropdown}
            />}</div>
            <Dropdown 
              showMenu={props.items.showMenu}
              submenus={props.items.submenu}
              toggleMobileMenu={props.toggleMobileMenu}
              />
        </div>
        )
        :
        props.items.title === "Donate" ?
        (
          <HashLink
            to={props.items.url}
            className="nav-list-item nav-item donate"
            onClick={props.toggleMobileMenu}
            >
              {props.items.title}
          </HashLink> 
        ) 
        :
        (
          <HashLink
            to={props.items.url}
            className="nav-list-item nav-item nav-item-title"
            onClick={props.toggleMobileMenu}
            >
              {props.items.title}
          </HashLink> 
        )

      ) 
}

