import { Link } from 'react-router-dom'

import React from 'react';

export default function RightsHome() {
  return (
    <div id='rights' className='rights-container'>
      <div className='rights-banner'>
        <h1 className='rights-header'>Know Your Rights!</h1>
        <Link to="/know-your-rights">
          <button className='rights-cta  btn-hover'>Visit Our Resource Page</button>
        </Link>
      </div>
    </div>
  )
}