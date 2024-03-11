import React from "react"
import { NavHashLink } from "react-router-hash-link"
import { HashLink } from "react-router-hash-link"
import { FaChevronDown } from 'react-icons/fa'
import Dropdown from "./Dropdown"

export default function MenuItem(props) {

  return (
     props.items.title === "Contact" ?
      (
      <NavHashLink
        to={props.items.url}
        className="nav-list-item nav-item nav-item-title">
          {props.items.title}
      </NavHashLink>
      )
      : 
      props.items.submenu ? 
        props.items.title === "Resources" ? 
        (
          <div
            className="nav-item-dropdown nav-item"
            onMouseEnter={props.toggleDropdown}
            onMouseLeave={props.toggleDropdown}
          >
              <div className="nav-item-title">
                {props.items.title} {props.mobileNavState && <FaChevronDown className="mobile-dropdown-arrow" />}</div>
              <Dropdown 
                positionRight={true}
                showMenu={props.items.showMenu}
                submenus={props.items.submenu}
              />
          </div>
          )
        :
        (
        <div
          className="nav-item-dropdown nav-item"
          onMouseEnter={props.toggleDropdown}
          onMouseLeave={props.toggleDropdown}
        >
            <div className="nav-item-title">{props.items.title} {props.mobileNavState && <FaChevronDown className="mobile-dropdown-arrow" />}</div>
            <Dropdown 
              showMenu={props.items.showMenu}
              submenus={props.items.submenu}/>
        </div>
        )
        :
        props.items.title === "Donate" ?
        (
          <HashLink
            to={props.items.url}
            className="nav-list-item nav-item donate">
              {props.items.title}
          </HashLink> 
        ) 
        :
        (
          <HashLink
            to={props.items.url}
            className="nav-list-item nav-item nav-item-title">
              {props.items.title}
          </HashLink> 
        )

      ) 
}

