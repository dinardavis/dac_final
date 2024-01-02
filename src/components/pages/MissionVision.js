import React from 'react'
import logo from "../../assets/imgs/notext_logo.png"
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom_white.png"
import circleGraphic from "../../assets/imgs/circle_graphic.png"
import { BiSolidRightArrow } from "react-icons/bi"
import { FaCircle } from "react-icons/fa"


export default function MissionVision() {
  return (
    <section className='single-page-layout mission-section'>
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <div className='mission-content'>
        <h1 className='section-header position-center'>About Dependency Advocacy Center</h1>

        <div className='about-content' >
          <img className="about-logo" src={logo} alt='DAC logo' />

          <p className='about-copy copy'>Dependency Advocacy Center (DAC), a nonprofit 501(c)(3) organization, provides interdisciplinary family defense legal services to indigent parents and children involved in Santa Clara County’s informal and formal child welfare system. Our adult clients face the risk of permanent separation from their children due to allegations of abuse and neglect. Substance use disorder, intimate partner violence, and mental health concerns are commonly presenting issues, often rooted in the layered effects of poverty, marginalization, and intergenerational trauma.   DAC was founded on the belief that traditional legal advocacy is insufficient to adequately represent our parents and youth clients. Our approach to holistic family defense utilizes an interdisciplinary team of attorneys, social workers, and mentor parents to create client-centered legal strategies designed to support the family’s long-term success. </p>
        </div>

        <div className='mission-graphic-container'>
          <div className='mission-step burgundy-linear-gradient'>
            <h1 className='mission-header'>Vision</h1>
            <div className='mission-step-graphic'>
              <div className='mission-step-line'>
              </div><BiSolidRightArrow className='mission-step-icon'/>
            </div>
            <div className='mission-step-copy'>
              <p>Empower Families to break cycles of system-involvement and marginalization</p>
            </div>
          </div>
          <div className='mission-step pink-linear-gradient'>
            <h1 className='mission-header'>Mission</h1>
            <div className='mission-step-graphic'>
              <div className='mission-step-line'>
              </div><BiSolidRightArrow className='mission-step-icon'/>
            </div>
            <div className='mission-step-copy'>
              <p>Preserve families and restore dignity through zealous advocacy</p>
            </div>
          </div>
          <div className='mission-step darkblue-linear-gradient'>
            <h1 className='mission-header'>Impact</h1>
            <div className='mission-step-graphic'>
              <div className='mission-step-line'>
              </div><FaCircle className='mission-step-icon dot'/>
            </div>
            <div className='mission-step-copy'>
              <p>Every client will have meaningful access to justice in the pursuit of their family well being</p>
            </div>
          </div>
        </div>

        <p className='about-copy copy position-center'>DAC provides zealous legal representation to indigent clients in the juvenile dependency system to promote timely reunification and preservation of families in a safe, healthy environment. DAC believes that every parent and child entering the dependency system has a right to be treated with dignity, compassion and respect.</p>

      </div>

      <div className='about-content-bottom lightblue-gradient' >
        <h1 className='section-header position-center'>Our Approach to Advocacy</h1>
        


        <div className='about-graphic-container'>
          <img src={circleGraphic} className='about-circle-graphic' alt='' />
          <p className='about-copy copy about-graphic-subhead'>Comprehensive family defense advocacy at DAC involves a three-pronged approach:</p>
  
          <div className="mission-graphic-marker white mission-graphic-marker-1"></div>

          <div className="mission-graphic-marker white mission-graphic-marker-2"></div>
      
          <div className="mission-graphic-marker white mission-graphic-marker-3"></div>
    
          <p className='graphic-prongs prong-1 burgundy-linear-gradient'>Providing a skilled interdisciplinary team to offer holistic client support</p>
          <p className='graphic-prongs prong-2 darkblue-linear-gradient'>Encouraging system improvement through innovative programming and child welfare best practices </p>
          <p className='graphic-prongs prong-3 pink-linear-gradient'>Employing early intervention strategies to help prevent the need for initial or prolonged system involvement </p>
        </div>

        <p className='about-copy copy'>The holistic support offered by DAC’s interdisciplinary team of <span className='copy-bold'>attorneys</span>, <span className='copy-bold'>social workers</span>, and <span className='copy-bold'>peer mentors</span> provides parents and children with a more comprehensive network of resources and pathways to success.</p>

        <p className='about-copy copy copy-bottom '>Through DAC’s approach to advocacy and a proven commitment to client-centered strategies, DAC is making a difference for thousands of families in Santa Clara County.</p>
        <img src={singlePageBottom} className="single-page-graphic single-page-bottom" alt="" />
      </div>
    </section>
  )
}