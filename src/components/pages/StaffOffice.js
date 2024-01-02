import React from 'react'
import { BsArrowUpCircle } from "react-icons/bs"
import StaffProfile from "./StaffProfile"

export default function StaffOffice({ item, toggleOffice }) {
  return (
    item.office_type ? (
      <div className='office no-dropdown'>
        <div className='office-header'>
          <h1 className='office-name'>{item.office_name} {item.office_initials}</h1>
        </div> 
      </div>
    ) :
    item.submenu ? 
      (
        <div className='office'>
        <div className='office-header' onClick={toggleOffice}>
          <h1 className='office-name'>{item.office_name} {item.office_initials}</h1>
          <BsArrowUpCircle className={`toggle-office-icon ${item.showOffice ? "open" : ''}`} />
        </div> 
          {item.showOffice && <div className='office-content'>
            <p className='office-address'>{item.office_address}</p>
            {item.office_phone ? <p className='office-phone'>{item.office_phone}</p> : ""}
            {item.office_fax ? <p className='office-fax'>{item.office_fax}</p> : ""}
            <div className='staff-profiles'>
              <StaffProfile 
                submenu={item.submenu}
              />    
            </div>     
          </div>}
        </div>
      ) :
      (
        <div className='office'>
        <div className='office-header' onClick={toggleOffice}>
          <h1 className='office-name'>{item.office_name} {item.office_initials}</h1>
          <BsArrowUpCircle className={`toggle-office-icon ${item.showOffice ? "open" : ''}`} />
        </div> 
        {item.showOffice && <div className='office-content'>
            <p className='office-address'>{item.office_address}</p>
            {item.office_phone ? <p className='office-phone'>{item.office_phone}</p> : ""}
            {item.office_fax ? <p className='office-fax'>{item.office_fax}</p> : ""}
            <div className='staff-profiles'>
              <h1 className='empty-office-message'>This Office is undergoing a reorganization,<br/> and will be updated shortly.</h1> 
            </div>
          </div>}
        </div>
      )
  )
}