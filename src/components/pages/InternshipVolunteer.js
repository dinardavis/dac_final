import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/whatwedo_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/whatwedo_left.png"
import BackButton from "../BackButton";
import InternApplyForm from './InternApplyForm';

export default function InternshipVolunteer() {
  return (
    <section className='section single-page-layout'>
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
      <div className='diversity-content single-page-content programs-intro position-center'>
        <BackButton />
        <h1 className='section-header single-page-header'>Internships & Volunteer Opportunities</h1>

        <div className="career-detail-copy">
          <p className="copy-bold">Organization Description</p>
          <p className="copy">Dependency Advocacy Center (DAC), a 501(c)(3) nonprofit organization, provides interdisciplinary family defense legal services to indigent parents and children involved with Santa Clara County’s juvenile dependency system. Our adult clients face the risk of permanent separation from their children due to allegations of abuse and neglect. Substance use disorder, intimate partner violence, and mental health concerns are commonly presenting issues, often rooted in the layered effects of poverty, marginalization, and intergenerational trauma. DAC was founded on the belief that traditional legal advocacy is insufficient to adequately represent our parent and youth clients. Our approach to holistic family defense utilizes an interdisciplinary team of attorneys, social workers, and mentor parents to create client-centered legal strategies designed to support the family’s long-term success.</p>

          <p className="copy-bold">Mission Statement</p>
          <p className="copy">Dependency Advocacy Center provides zealous legal representation to indigent clients in the juvenile dependency system to promote timely reunification and preservation of families in a safe, healthy environment. DAC believes that every parent and child entering the dependency system has a right to be treated with dignity, compassion and respect.</p>
        </div>

        <InternApplyForm 
          jobTitle="Internship&#47;Volunteer" 
        />
      </div>
    </section>
  )
}