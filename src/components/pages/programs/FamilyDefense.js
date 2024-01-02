import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import singlePageTop from "../../../assets/imgs/graphics/singlepage_top_white.png"
import singlePageBottom from "../../../assets/imgs/graphics/singlepage_bottom_white.png"
import singlePageLeft from "../../../assets/imgs/graphics/singlepage_left_white.png"
import socialWorker from "../../../assets/imgs/psychiatrist.jpg"
import mentors from "../../../assets/imgs/mentors.jpg"
import attorneys from "../../../assets/imgs/attorneys.jpg"

export default function FamilyDefense() {
  return (
    <section id="legal-services" className='what-we-do-section'>
      <div className='programs-section-background intro-content-container lightblue-gradient'>
          <img src={singlePageTop} className='section-graphic single-page-graphic programs-top' alt='' />
          <div className='program-content-container'>
            <h1 className='section-header single-page-header programs-header'>Court Appointed Legal Defense</h1>
            {/* <h1 className='section-header single-page-header programs-header'>Providing Holistic Support to Families in the Child Welfare System</h1>
            <p className='copy'>DAC was founded in 2008 by family defense attorneys with a passion for helping vulnerable families involved in the child welfare system.  DAC believes that these families deserve a meaningful path to justice, self-sufficiency, and well-being.</p> */}
          {/* <div className='subhead-container'>
            <p className='programs-subhead darkblue-linear-gradient '>DAC provides comprehensive services to families in Santa Clara County in the Child Welfare System:</p>
          </div> */}
            <h1 className='programs section-subhead'>Legal Services</h1>
            <img src={attorneys} alt='' className="programs-img img-float-left" />
            <p className='copy'>Dependency Advocacy Center provides free legal services to indigent parents and children involved in Santa Clara County’s formal child welfare system. If an indigent parent appears at court and requests counsel, the Juvenile Court will appoint DAC for representation with limited exception.</p>

            <p className='copy'>Our attorneys are trained in juvenile dependency law.  We act as advocates for both parents and youth, offering support both within and beyond the courtroom. Our role includes providing guidance on matters that may be unclear to clients and assisting them in navigating the steps required for family reunification and/or case dismissal.</p>

            <p className='copy'>DAC firmly upholds the belief that due process holds utmost significance in handling these delicate cases. In addition to implementing well-defined legal tactics, DAC incorporates in-house social workers and Mentor Parents to provide families with a holistic and pioneering support system. This multifaceted advocacy approach concentrates on safeguarding legal rights while actively involving the individual to improve their situation, ultimately aimed at restoring the family's unity.</p>

            <p className='copy'>If an open dependency court case involves your child, the court may have assigned you an attorney from our offices. In cases where you haven't been appointed an attorney, lack their contact information, or are unsure of their identity, please reach out to us or <NavHashLink className="link-blue-text">ACCESS HELP HERE</NavHashLink>.</p>

            <p className='copy'>Please be aware that all discussions with your attorney are held in STRICT CONFIDENCE. Their affiliation is not with the Department of Family and Children’s Services, and as court-appointed representatives, their services are typically provided at no cost (unless the court mandates legal fees based on your financial capacity).</p>
          </div>
        </div>

        <div className='programs-section-background social-worker-section burgundy-linear-gradient'>
          <div className='program-content-container'>
            <div id="social-workers" ></div>
            <h1 className='programs section-subhead single-page-header text-left'>In-House Social Workers</h1>
            <img src={socialWorker} alt='' className="programs-img img-float-right" />

            <p className='copy text-left'>DAC’s Social Worker Program is composed of Social Workers (both LCSWs and MSWs) and plays a crucial role in the interdisciplinary family defense team.</p>

            <p className='copy text-left'>Social workers utilize a strengths-based model of practice acknowledging that every parent who enters this system comes with their own unique story, background and skills and creating a personalized plan for each client.</p>

            <p className='copy text-left'>DAC has been innovative in utilizing social workers in concert with traditional legal services to provide the highest level of representation for its clients. A social worker’s educational training, experience, and role complement that of an attorney and allow them to strategize with the attorney and parent mentor on a case to best serve each client.</p>

            <p className='copy text-left'>The primary purpose of utilizing DAC social workers is to provide clinical expertise to support and enhance the legal position asserted on behalf of the client.</p>
            
            <p className='text-center copy-thin'>* All DAC Social Workers operate under attorney-client privilege and are not mandated reporters.</p>
          </div>
          <img src={singlePageLeft} className='section-graphic single-page-graphic programs-left' alt='' />
        </div>

      <div className='programs-section-background mentor-section darkblue-linear-gradient'>
        <img src={singlePageBottom} className='section-graphic single-page-graphic programs-bottom' alt='' />
        <div className='program-content-container'>
          <div id="mentor-parents"></div>
            <h1 className='programs section-subhead single-page-header'>Mentor Parents</h1>
          <img src={mentors} alt='' className="programs-img img-float-left" />

          <p className='copy'>Mentors are part of an interdisciplinary legal team and serve parents represented by DAC attorneys involved in open dependency cases. A Mentor Parent is a mother or father with lived experience in the child welfare system. They have had their children removed, or were at risk of having their children removed, because of a variety of issues, including: drug and/or alcohol use disorder, intimate partner violence issues, criminal justice involvement, and/or mental health issues.</p>

          <p className='copy'>All Mentor Parents participated in services to address the precipitating events/issues and have successfully reunified with their child(ren). The Department of Family and Children Services (DFCS) are no longer involved in their families’ lives, their cases have been dismissed and the court no longer has jurisdiction over their families. </p>

          <p className='copy'>The role of the Mentor Parent is to provide support, guidance and motivation to those parents whose children have been or are currently at risk of being removed from their care. Mentor Parents work directly with DAC attorneys as part of an interdisciplinary legal team to encourage early engagement in rehabilitative services and to provide guidance to parents as they navigate the child welfare system.</p>
          
          <p className='copy'>Learn about the impact of the program <NavHashLink className="link-white-text">here</NavHashLink>.</p>
        </div>
      </div>
 
    </section>
  )
}