import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import singlePageTop from "../../../assets/imgs/graphics/singlepage_top_white.png"
import singlePageBottom from "../../../assets/imgs/graphics/singlepage_bottom_white.png"
import corridor from "../../../assets/imgs/corridor.jpg"
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import FirstCallVideos from './FirstCallVideos'


export default function Prevention() {
  return (
    <section id='first-call' className='what-we-do-section'>
      <div className='programs-section-background intro-content-container lightblue-gradient'>
        <img src={singlePageTop} className='section-graphic single-page-graphic programs-top' alt='' />
          <div className='program-content-container'>
            <div className='programs-intro'>
              <h1 className='section-header single-page-header programs-header'>Prevention Services</h1>
            </div>
            <h1 id="first-call-for-families" className='programs section-subhead single-page-header'>First Call For Families</h1>
            
            <div className='first-call-videos-container'> 
              <FirstCallVideos />
            </div>
              <p className='copy'>
              First Call for Families was launched in 2021 to provide support to families before Department of Family and Children's Services files a petition in dependency court. Recognizing that removal of a child is a traumatic event for the entire family, and that it can often be prevented with the right peer support, safety planning, or legal counsel, DAC established this prevention services team to help keep families together. To date, we have helped hundreds of parents and caregivers in Santa Clara County navigate investigations and mitigate risk factors affecting their children’s safety and wellbeing.</p>

              <p className='copy'>In order to maximize our impact, we utilize an interdisciplinary team of attorneys, social workers, and mentor parents.</p>

              <p className='copy copy-bold'>First Call provides three different types of services:</p>
              
              <p className='copy'>The <span className='copy-bold'>Warm Line</span> is a toll-free phone number for families to call for support, basic advice, and/or referrals within the community. Through <span className='copy-bold'>Know Your Rights Presentation</span>, the First Call team provides information to families about their rights and responsibilities before, during, and after the removal of a child by CPS. Finally, First Call may also provide more <span className='copy-bold'>individualized support</span> for families who require more intensive, wraparound support than our other services provide. This may include services such as peer support, case management, and legal advice before a court case begins.</p>
              <div className='first-call-hours'>
                <p className='first-call-copy copy'>To inquire about any of these services, or to refer a family, please give us a call at our warm line number:</p>
                
                <ul className='first-call-hours-list copy'>
                  <li><NavHashLink className="link-blue-text first-call-phone" to="tel:+1408-856-2992" target="_blank"><BsTelephoneFill /> (408) 856-2992</NavHashLink></li>
                  <li>Hours of Operation</li>
                  <li>Mon-Thurs, 9am-4pm</li>
                  <li>Evening hours: Thurs, 5pm-8pm</li>
                </ul>
              </div>
             

              <div className='first-call-disclaimer'>
                <p className='first-call-copy copy-bold copy text-center'>* All calls to the warm line are confidential. We will never share your information without your permission. First Call for Families services are provided free of charge.</p>
              </div>
             
          </div>
        </div>

        <div className='programs-section-background corridor-section pink-linear-gradient'>
          <div className='program-content-container'>
            <div id="corridor" ></div>
            <h1 className='programs section-header single-page-header corridor-subheader'>Corridor Program</h1>

            <div className='corridor-img-container img-float-left'>
              <img src={corridor} alt='' className="programs-img img-float-right" />
            </div>
      

            <p className='copy'>DAC collaborated with Santa Clara County’s Adult Probation Department to create the Corridor program to address the specific needs of parents on probation who often find themselves at the intersection of the criminal justice and child welfare systems.</p>

            <div className='corridor-subhead-container'>
              <p className='corridor-subhead'>Too often families feel trapped between the criminal justice and child welfare systems. Find the path out.</p>
            </div>

            <p className='copy'>Corridor utilizes an interdisciplinary team service model comprised of an <span className='copy-bold'>attorney</span>, a <span className='copy-bold'>social worker</span> and gender specific <span className='copy-bold'>mentor parents</span>. As an attorney led program, all communication between Corridor staff and Corridor clients is privileged and confidential – creating space for honest and open communication to proactively address concerns impacting the family and to create appropriate safety plans.</p>
           
            <p className='corridor section-subhead single-page-header'>What We Do:</p>
            <div className='prevention-services-content'>
              <div>
                <p className='copy-bold prevention-services-subhead'>Open Case Services:</p>
                <p>Corridor provides parents with open dependency cases full scope legal representation, peer support, supplemental resource referral, and inter-system advocacy.</p>
              </div>
              <div>
                <p className='copy-bold prevention-services-subhead '>Prevention Services:</p>
                <p>Corridor links parents to appropriate community-based services and resources to obtain self-sufficiency and stability; develops safety plans in the event of relapse, arrest, or incarceration; provides peer support and guidance through a mentor parent; and offers legal consultation and advice regarding the child welfare system and limited scope legal representation on matters directly related to family preservation or child protection.</p>
              </div> 
            </div>
            <div className='prevention-services-content-bottom copy-bottom'>
              <p className='copy-bold prevention-services-subhead '>Interested?</p>
              <p className='prevention-copy'>Prevention services are available free of cost to parents (and expectant parents) with criminal justice system involvement in Santa Clara County.</p>
              <p className='prevention-copy'>Priority is given to parents on adult or juvenile probation. If you are interested in participating in or referring a parent for Corridor prevention services:</p>

              <p className='prevention-link'>
                <span > 
                  <NavHashLink className="link-white-text prevention-span copy" to="tel:+1408-564-5142" target="_blank"><BsTelephoneFill className='corridor-icon'/> (408) 564-5142</NavHashLink>
                </span>
              </p>  

              <p className='prevention-link'>
                <span>
                  <NavHashLink className="link-white-text prevention-span copy" to="mailto:corridor@sccdac.org" target="_blank"><MdEmail className='corridor-icon'/> corridor@sccdac.org</NavHashLink>
                </span>
              </p>                    
            </div>      
          </div>
        <img src={singlePageBottom} className="single-page-graphic single-page-bottom" alt="" />
      </div>
    </section>
  )
}