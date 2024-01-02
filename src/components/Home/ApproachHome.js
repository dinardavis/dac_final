import React from 'react';
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { BiSolidQuoteRight } from 'react-icons/bi'
import attorney from "../../assets/imgs/attorney_silhouette.png"
import socialworker from "../../assets/imgs/socialworker_silhouette.png"
import mentor from "../../assets/imgs/mentor_silhouette.png"
import approachGraphicRight from "../../assets/imgs/graphics/approach_graphic_right.png"
import approachGraphicLeft from "../../assets/imgs/graphics/approach_graphic_left.png"
import approachFamily from "../../assets/imgs/approach_family.jpg"
import approachMomBaby from "../../assets/imgs/approach_mom.jpg"


export default function ApproachHome() {
  return (
    <section id="approach" className="approach-section section">
      <img src={approachGraphicLeft} className="section-graphic approach-left" alt="" />
      <img src={approachGraphicRight} className="section-graphic approach-right" alt="" />
      <div className='approach-content'>
        <h1 className='section-header position-center'>DAC’s Holistic Approach</h1>
        <p className='approach-copy copy position-center'>Dependency Advocacy Center (DAC) serves Santa Clara’s County parents and some children involved in the child welfare system. DAC’s multi-pronged approach to advocacy, which focuses on both protecting the client’s legal rights while simultaneously engaging the client to better his or her circumstances, is targeted toward making the family whole again. DAC supports families involved in the system through an interdisciplinary team.</p>

        <div className="approach-graphic">
          <div className='approach-team team-1 approach-background burgundy-linear-gradient'>
            <img className='team-img' src={attorney} alt=''/>
            <p className='team-copy'>Attorneys providing free legal representation</p>
          </div>
          <div className='approach-team team-2 approach-background pink-linear-gradient'>
            <img className='team-img' src={socialworker} alt=''/>
            <p className='team-copy'>Social Workers providing clinical expertise</p>
          </div>
          <div className='approach-team team-3 approach-background darkblue-linear-gradient'>
            <img className='team-img' src={mentor} alt=''/>
            <p className='team-copy'>Parent Mentors that have lived experience in the child welfare system</p>
          </div>
        </div>

        <p className='approach-copy approach-highlight copy position-center'>Since 2008 DAC’s work has supported thousands of families reunifying with or preventing the removal of children from their family home.</p>
      </div>

   

      <div className='approach-content approach-content-bottom pink-linear-gradient'>
        <h1 className='approach-header section-header'>Breaking cycles of System involvement</h1>
        
        <div className='approach-content-container'>
          <div className='approach-img-container-main'>
            <img className='approach-family-img' src={approachFamily} alt='family laughing together' />
            <p className='approach-copy approach-copy-quote position-center'><BiSolidQuoteLeft className='approach-quote-left'/>DAC's team gave me my life back. Because they took my case when I was incarcerated and gave me a second chance. I have everything today. I have a career. I have a home. I have my kids back. I have a relationship with my family, the people that I hurt.<BiSolidQuoteRight className='approach-quote-right'/></p>
          </div>

          <div div className='approach-copy-container-mobile'>
            <p className='approach-copy-mobile position-center'><BiSolidQuoteLeft className='approach-quote-left'/>DAC's team gave me my life back. Because they took my case when I was incarcerated and gave me a second chance. I have everything today. I have a career. I have a home. I have my kids back. I have a relationship with my family, the people that I hurt.<BiSolidQuoteRight className='approach-quote-right'/></p>
          </div>

          <div div className='approach-copy-container'>
            <p className='copy'>In Santa Clara County, African American and Latino children living in poverty are far from likely to enter foster care- a system that regularly serves as a pipeline to incarceration, substance abuse, sex trafficking, and homelessness.</p>
            
            <p className='approach-copy-bottom copy'>Without effective intervention strategies that target long-term family wellbeing, the parents and children served by DAC are particularly susceptible to repeated cycles of separation and court involvement.</p>
          </div>     
          <img className='approach-mom-img' src={approachMomBaby} alt='Mother and infant baby' /> 
        </div>
      </div>
    </section>
  )
}