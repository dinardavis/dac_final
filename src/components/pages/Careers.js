import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"
import careersData from '../../Data/careersData';
import MailingList from './MailingList';
import singlePageTop from "../../assets/imgs/graphics/whatwedo_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/whatwedo_left.png"
import handshake from "../../assets/imgs/handshake.jpg"

export default function Careers() {

  const careers = careersData.map((career) => {
    return (
      <Link to={`/careers/${career.id}`} key={career.id} className='career-link'>- 
            <p className="career-title-link link-blue-text">{career.job_title}</p>
      </Link>
    );
  });

  return (
    <section className='career-layout'>
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle careers-middle" alt="" />
      <div className='career-content'>
        <h1 className='section-header single-page-header'>DAC Careers</h1>
        <img src={handshake} className="career-handshake img-float-right" alt="Close-up of handshake" />
        <p className='careers-copy'>Dependency Advocacy Center (DAC), a 501(c)(3) nonprofit organization, provides interdisciplinary family defense legal services to indigent parents and children involved with Santa Clara County’s juvenile dependency system. Our adult clients face the risk of permanent separation from their children due to allegations of abuse and neglect. Substance use disorder, intimate partner violence, and mental health concerns are commonly presenting issues, often rooted in the layered effects of poverty, marginalization, and intergenerational trauma. DAC was founded on the belief that traditional legal advocacy is insufficient to adequately represent our parent and youth clients. Our approach to holistic family defense utilizes an interdisciplinary team of attorneys, social workers, and mentor parents to create client-centered legal strategies designed to support the family’s long-term success.</p>
      </div>
        {careersData.length > 0 ?
        <div className='career-content'>
        <div>
          <p className='careers-copy'>Joining DAC means having the opportunity to partner with dedicated professionals working toward the common goal of serving Santa Clara County families. Check out our available opportunities to start your journey toward a DAC career today!</p>
        </div>
        
          <h1 className='section-subhead'>Career Openings</h1>

          <div className='career-title-container'>
 

          <a href={require("../../Data/DAC_COO_2025.pdf")} download="DAC COO Role Description" target="_blank" rel="noopener noreferrer" className='career-link'>
            -<p className="career-title-link link-blue-text">Chief Operating Officer</p>
          </a>
            {careers}
          </div>
        </div>
        : ""}
        
        <div className='career-content'>
          {/* <h1 className='section-subhead'>Requests For Proposals</h1>

          -<a href={require("../../Data/DEI_Consultant_RFP.pdf")} download="DAC DEI Consultant RFP" target="_blank" rel="noopener noreferrer" className="career-title-link link-blue-text">Diversity, Equity, and Inclusion (DEI) Consultant</a> */}

           

          <h1 className='section-subhead'>Internship & Volunteer Opportunities</h1>

          <p className='careers-copy internship '>We are always accepting inquiries regarding internship and volunteer opportunities. Please <span><HashLink
            to="/internships-volunteers" className='link-blue-text'>
              click here
          </HashLink> </span>to submit a resume and cover letter for either role. </p> 
        </div>     

        <div className='careers-mailing-list burgundy-linear-gradient'>
          <MailingList />
        </div> 
    </section>
  )
}