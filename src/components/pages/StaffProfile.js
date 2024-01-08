import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { NavHashLink } from 'react-router-hash-link';

export default function StaffProfile({submenu}) {

  const [staffBio, setStaffBio] = React.useState(submenu)

  function toggleBio(id) {
    setStaffBio(prevData => prevData.map(data => {
      return data.staff_id === id ?
        {...data, showBio: !data.showBio} :
        {...data, showBio: false}
    }))
  }

  return (
      staffBio.map(staff => {
        return <div className='staff-profile'>
                  <div className='staff-img-container'>
                    <img src={staff.img} className="staff-img" alt={`${staff.first_name} ${staff.last_name}`} />
                  </div>
                  <div className='staff-info-container'>
                    <div className='staff-name-container'>
                      <h1 className='staff-firstname'>{staff.first_name}</h1>
                      <h1 className='staff-lastname'>{staff.last_name}</h1>
                    </div>
                    {staff.suffix_name && <h1 className='staff-suffix-name'>{staff.suffix_name}</h1>}
                    <h2 className='staff-title'>{staff.title}</h2>

                    <NavHashLink 
                    className={`staff-email ${ staff.email.length > 22 ? "small" : ""}`} to={`mailto:${staff.email}`} target="_blank"><MdEmail className='staff-email-icon' /> {staff.email}</NavHashLink>

                    {staff.phone && <p className='staff-phone'><BsTelephoneFill className='staff-phone-icon' /> {staff.phone}</p>}
                    {staff.bio ? 
                    <p className='show-bio-btn btn-hover' onClick={() =>toggleBio(staff.staff_id)} >{staff.first_name.slice(-1) === 's' ? `${staff.first_name}' Bio` : `${staff.first_name}'s Bio`}</p>
                    : ""}
                  </div>
              
                  {staff.showBio && <div className='staff-bio'>
                   
                    <p>{staff.bio}</p>
                  </div>}
                </div>
      })
    
  )
}