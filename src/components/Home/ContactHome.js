import React from 'react';
import ContactForm from './ContactFom';
import officeLocationMap from "../../assets/imgs/location.png"
import contactLeft from "../../assets/imgs/graphics/contact_left.png"
import contactRight from "../../assets/imgs/graphics/contact_right.png"

export default function ContactHome() {

  return (
    <section className="contact-section section">
      <img src={contactLeft} className="section-graphic contact-graphic-left" alt='circle graphic' />
      <img src={contactRight} className="section-graphic contact-graphic-right" alt='circle graphic' />
      <h1 id="contact" className='section-header'>Contact Us</h1>
      <div className='contact-content'>
        <div className='contact-content-left'>
          <p className='contact-copy copy'>For funding, media, or general inquiries, please submit the form below.</p>
          <p className='contact-copy copy'>If you require immediate representation on an active dependency case, click here, or call DAC’s main office phone number.</p>
          <ContactForm />
        </div>
        <div className='contact-content-right'>
          <p className='contact-copy copy main-office copy-bold'>Main Office</p>
          <img src={officeLocationMap} className='contact-map-img' alt="Map location of DAC main office" />
          <p className='contact-copy copy'>Main: 408-995-0714<br/> Fax: 408-516-3812</p>
          <p className='contact-copy copy'>31 N. Second Street, Suite 300<br/> San Jose, CA 95113</p>
        </div>
      </div>
    </section>
  )
}