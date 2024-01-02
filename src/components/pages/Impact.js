import React from 'react'
import impactDadAndSon from "../../assets/imgs/dadandson.jpg"
import momAndInfant from "../../assets/imgs/impact_mom_infant.jpg"
import momDaughter from "../../assets/imgs/impact_mom_daughter.jpg"
import fatherSon from "../../assets/imgs/impact_father_son.jpg"
import paintingnails from "../../assets/imgs/impact_paintingnails.jpg"
import presentation from "../../assets/imgs/impact_presentation.png"
import impactStat1 from "../../assets/imgs/impact_stat_1.jpg"
import impactStat2 from "../../assets/imgs/impact_stat_2.jpg"
import impactStat3 from "../../assets/imgs/impact_stat_3.jpg"
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { BiSolidQuoteRight } from 'react-icons/bi'
import { Link } from "react-router-dom"
import singlePageRight from "../../assets/imgs/graphics/singlepage_right.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom.png"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left_white.png"


export default function Impact() {
  return (
    <section className='impact-section'>
      <img src={singlePageRight} className="single-page-graphic staff-graphic-right" alt="" />
        <div className='impact-top-container'>
          <div className='impact-content-container'>
            <h1 className='section-header single-page-header text-center'>Our Impact On Families and Communities</h1> 
            <p className='copy impact-header impact-header'>Since 2008 DAC’s work has supported thousands of parents in reunifying with their children or preventing the removal of their children from the family home.</p>
  
            <div className='impact-dad-img-container'>
              <p className='dad-son-quote'><BiSolidQuoteLeft className='impact quote-left'/>He [parent mentor] was very helpful in making me feel like there was hope, because he himself had been there and he knew what I was going through.<BiSolidQuoteRight className='impact quote-right'/></p>
              <img src={impactDadAndSon} className="dad-son-img" alt='Father holding infant son on his shoulders' />
           </div>
           
          <div className='impact-stats-container'>
            <p className='programs section-subhead'>DAC Impact By The Numbers</p>
            <div className='impact-stats-content'>
              <div className='impact-stat stat-1'>
                <img src={impactStat1} alt="" />
                <div className='impact-stat-copy'>
                  <p className='line-1'>Through Family Defense Cases:</p><p className='line-2'>Over 10,000</p><p className='line-3'>parents and children served</p>
                </div>
              </div>

              <div className='impact-stat stat-2'>
                <img src={impactStat2} alt="" />
                <div className='impact-stat-copy'>
                  <p className='line-1'>Via Warm Line Callers:</p><p className='line-2'> 457 Individuals</p><p className='line-3'>Assisted</p>
                </div>
              </div>

              <div className='impact-stat stat-3'>
                <img src={impactStat3} alt="" />
                <div className='impact-stat-copy'>
                  <p className='line-1'>Know Your Rights Outreach:
                  </p><p className='line-2'>483 Community Members</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="impact-testimonials-container burgundy-linear-gradient">
          <div className='testimonial testimonial-1'>
            <p className='testimonial-quote'><BiSolidQuoteLeft className='impact quote-left'/>My Parent mentor advocated for me, helped me to find answers that I needed, helped me with any type of resources that helped me with what I needed.<BiSolidQuoteRight className='impact quote-right'/></p>
          </div>
          <div className='testimonial testimonial-2'>
            <img src={momAndInfant} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-3'>
            <img src={paintingnails} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-4'>
            <img src={fatherSon} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-5'>
            <img src={momDaughter} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-6'>
            <p className='testimonial-quote'><BiSolidQuoteLeft className='impact quote-left'/>The social worker was there for me recently when I had an issue where I had to go to court for a warrant for about a year and the social worker was at every single court date. I will never ever forget that.<BiSolidQuoteRight className='impact quote-right'/></p>
          </div>
          <img src={singlePageLeft} className=' single-page-graphic impact-graphic-left' alt='' />
        </div>

        <div className="impact-testimonials-container impact-testimonials-container-mobile burgundy-linear-gradient">
          <div className='testimonial testimonial-2'>
            <img src={momAndInfant} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-1'>
            <p className='testimonial-quote'><BiSolidQuoteLeft className='impact quote-left'/>My Parent mentor advocated for me, helped me to find answers that I needed, helped me with any type of resources that helped me with what I needed.<BiSolidQuoteRight className='impact quote-right'/></p>
          </div>
          <div className='testimonial testimonial-3'>
            <img src={paintingnails} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-4'>
            <img src={fatherSon} className="impact-mom-infant" alt='' />
          </div>
          <div className='testimonial testimonial-6'>
            <p className='testimonial-quote'><BiSolidQuoteLeft className='impact quote-left'/>The social worker was there for me recently when I had an issue where I had to go to court for a warrant for about a year and the social worker was at every single court date. I will never ever forget that.<BiSolidQuoteRight className='impact quote-right'/></p>
          </div>
          <div className='testimonial testimonial-5'>
            <img src={momDaughter} className="impact-mom-infant" alt='' />
          </div>
          <img src={singlePageLeft} className=' single-page-graphic impact-graphic-left' alt='' />
        </div>

        <div className='impact-middle-section'>
          <div className='impact-content-container'>
          <p className='programs section-subhead'>DAC System Change Impact</p>

          <img className="impact-presentation-img img-float-left" src={presentation} alt='' />

          <p className='impact-copy'>DAC Leadership and Staff improve practice and advocate for systems change by participating in various committees on a national, statewide and local level —some of which include:  the American Bar Association’s National Alliance for Parent Representation (the Steering Committee and the Interdisciplinary Subcommittee), Family Justice Initiative, Pre-Petition Family Defense National Cohort, California’s Mandated Reporting to Community Supporting Task Force, Santa Clara County’s Parent Advisory Group, Santa Clara County’s Children System of Care (AB2083) and Santa Clara County’s Family First Prevention Committee.</p>

          <p className='impact-copy'>In addition, DAC leadership and staff educate and train those involved or impacted by the child welfare system.  Mentor Parents educate judges, Court Appointed Special Advocates (CASAs), and Department of Family and Children’s Services social workers about the child welfare system from the perspective of those with lived experience.  Corridor and First Call for Families’ teams conduct Know Your Rights presentations to community members and system partners.  Finally, DAC staff has presented at local, state and national conferences on various topics, including utilizing an interdisciplinary model in family defense, developing a pre-petition program, and building a mentor parent program.</p> 
          </div>
        </div>
       
        <div className='impact-bottom-section burgundy-linear-gradient'>   
          <img src={singlePageBottom} className='section-graphic single-page-graphic programs-bottom' alt='' />   
          <div className='impact-content-container impact-downloads-section '>
          <h1 className='programs section-subhead-white'>Interested in learning more about our impact?</h1>

          <p className='impact-copy'>This project consists of three research studies evaluating the DAC Corridor program. The studies include quantitative analyses of client self-sufficiency changes, program outcomes for participating families, and qualitative analysis of client and staff perspectives on the program's value.</p> 

          <ul className='impact-downloads copy-bottom'>
            <li className='impact-link'><Link className='copy link-white-text'>FY22 First Call Snapshot</Link></li>
            <li className='impact-link'><Link className='copy link-white-text'>Cirridor Program Debrief</Link></li>
          </ul>   
        </div>
      </div>
    </section>
  )
}