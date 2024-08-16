import React from "react";
import { useParams } from "react-router-dom";
import careersData from "../../Data/careersData";
import BackButton from "../BackButton";
import singlePageTop from "../../assets/imgs/graphics/whatwedo_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/whatwedo_left.png"
import ApplyForm from "./ApplyForm";

export default function CareersDetail() {
  const params = useParams();
  const [currentJob, setCurrentJob] = React.useState(null);
  const [showApplyForm, setShowApplyForm] = React.useState(false);

  React.useEffect(() => {
    setCurrentJob(
      careersData.filter((career) => career.id === params.id)
    );
  }, [params.id]);

  function toggleShowApplyForm() {
    setShowApplyForm(prev => !prev)
  }

  function preventScroll() {
    document.body.className = 'noscroll';
  }

  function allowScroll() {
    document.body.className = '';
  }

  React.useEffect(() => {
    if(showApplyForm) {
      preventScroll()
    } else {
      allowScroll()
    }
  }, [showApplyForm])


  return (
    <>
      {currentJob && (
        <section className="section single-page-layout article-section">
          <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
          <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
          <div className="article-detail-container">
            
            <BackButton />
            <div className="career-detail-copy">
                <h1 className="section-header career-detail-header">{currentJob[0].job_title}</h1>
                <p className="copy-bold">Organization Description</p>
                <p className="copy">Dependency Advocacy Center (DAC), a 501(c)(3) nonprofit organization, provides interdisciplinary family defense legal services to indigent parents and children involved with Santa Clara County’s juvenile dependency system. Our adult clients face the risk of permanent separation from their children due to allegations of abuse and neglect. Substance use disorder, intimate partner violence, and mental health concerns are commonly presenting issues, often rooted in the layered effects of poverty, marginalization, and intergenerational trauma. DAC was founded on the belief that traditional legal advocacy is insufficient to adequately represent our parent and youth clients. Our approach to holistic family defense utilizes an interdisciplinary team of attorneys, social workers, and mentor parents to create client-centered legal strategies designed to support the family’s long-term success.</p>

                <p className="copy-bold">Mission Statement</p>
                <p className="copy">Dependency Advocacy Center provides zealous legal representation to indigent clients in the juvenile dependency system to promote timely reunification and preservation of families in a safe, healthy environment. DAC believes that every parent and child entering the dependency system has a right to be treated with dignity, compassion and respect.</p>

                <p className="copy-bold">Responsibilities and Duties</p>
                {currentJob[0].job_duties.map((duty, index) => (
                   <p className="copy" key={index}>{`${duty}`}</p>
                ))}

                {currentJob[0].job_duties_bullets ? <ul className="copy unordered-list">
                {currentJob[0].job_duties_bullets.map((qual, index) => (
                   <li key={index}>{`${qual}`}</li>
                ))}
                </ul> : ""}

                {currentJob[0].job_duties_closing ? currentJob[0].job_duties_closing.map((duty, index) => (
                   <p className="copy" key={index}>{`${duty}`}</p> 
                )) : ""}

                <p className="copy-bold">Desired Qualifications</p>
                <ul className="copy unordered-list">
                {currentJob[0].job_quals.map((qual, index) => (
                   <li key={index}>{`${qual}`}</li>
                ))}
                </ul>

                <p className="copy-bold">Salary/Benefits</p>
                <p className="copy">{currentJob[0].salary}</p>

                <p className="copy-bold">DAC’s Diversity, Equity and Inclusion (DEI) Mission Statement</p>
                <p className="copy">At the Dependency Advocacy Center, our mission is to create an inclusive, equitable, and accessible environment where respect, kindness, and empathy guide all interactions with our staff, stakeholders, and clients. We are dedicated to fostering a culture of diversity, equity, and inclusion within our organization. We firmly believe that every parent and child entering the dependency system deserves to be treated with dignity, compassion, and respect. These values are not only applicable to our clients but also extend to all staff members.</p>
                <p className="copy">We are committed to continuous learning and self-reflection on matters concerning diversity, equity, inclusion, and accessibility. Through ongoing education, training, and critical analysis of our progress, we seek to deepen our understanding and awareness of these issues and the impact it has on our clients and staff members. By doing so, we can more effectively advocate for clients and promote all aspects of inclusion, including diverse representation in our leadership and staff.</p>
                <p className="copy">At DAC, we are determined to increase representative diversity within our organization. We aspire to become an actively pro-diversity company and a strong ally to all the communities we serve. We recognize the importance of intentional efforts to support individuals of diverse ethnicities, abilities, genders, gender identities, sexual orientations, ages, and all races and religious affiliations.</p>
                <p className="copy">Incorporating diversity, equity, and inclusion practices is at the core of our daily work at DAC. We strive to integrate these principles into every aspect of our organization to ensure a welcoming and inclusive environment for all.</p>

                <p className="copy-bold">COVID-19 Considerations:</p>
                <p className="copy">DAC is taking full precautions to keep their staff and clients safe. DAC requires that all staff be fully vaccinated for COVID-19.</p>

                <p className="copy-bold">Application Process</p>
                <p className="copy">Please submit your cover letter and resume via the "Apply Now" button below.</p>

                <p className="copy">In your cover letter, please include the following information: In order to best serve our clients and our community, DAC is committed to creating a diverse and inclusive workplace in which differences are acknowledged and valued. How has your personal background or experiences, professional or otherwise, prepared you to contribute to social justice, race equity, and diversity among our staff?"</p>

                {/* <ol className="copy order-list">
                  <li>Why are you interested in working as a family defense attorney and at DAC specifically?</li>
                  <li>In order to best serve our clients and our community, DAC is committed to creating a diverse and inclusive workplace in which differences are acknowledged and valued. How has your personal background or experiences, professional or otherwise, prepared you to contribute to social justice, race equity, and diversity among our staff?</li>
                </ol> */}
    
                <button 
                  className="cta-btn career-apply-btn copy-bottom"
                  onClick={toggleShowApplyForm}
                  >Apply Now</button>
            </div>
       
          </div>
          {showApplyForm ? 
            <ApplyForm 
              jobTitle={currentJob[0].job_title}
              toggleShowApplyForm={toggleShowApplyForm}
            /> 
            : "" }
        </section>
      )}
    </>
  );
}
