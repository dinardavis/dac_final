import React from 'react'
import diversityTeam from "../../assets/imgs/allstaff.jpg"
import singlePageTop from "../../assets/imgs/graphics/whatwedo_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/whatwedo_left.png"

export default function Diversity() {
  return (
    <section className='section single-page-layout'>
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
      <div className='diversity-content position-center copy-bottom'>
        <h1 className='diversity-header section-header single-page-header'>Diversity, Equity, & Inclusion</h1>

        <p className='copy'>DAC launched a staff driven DEI Committee in 2022. The committee developed the following mission statement and is actively developing and implementing a strategic plan.</p>

        <h1 className='diversity-subhead'>Dependency Advocacy Center's Approach to Diversity, Equity, & Inclusion</h1>

        <img className="diversity-img img-float-right" src={diversityTeam} alt='Rainbow Colored DAC Tree Logo' />

       

        <p className='copy'>At Dependency Advocacy Center, our mission is to create an inclusive and equitable environment where respect, kindness, and empathy guide all interactions with our staff, stakeholders, and clients. We are dedicated to fostering a culture of diversity, equity, and inclusion within our organization.</p>

        <p className='diversity-copy copy'>We firmly believe that every parent and child entering the dependency system deserves to be treated with dignity, compassion, and respect. These values are not only applicable to our clients but also extend to our staff members.</p>

        <p className='diversity-copy copy'>We are committed to continuous learning and self-reflection on matters concerning diversity, equity, and inclusion. Through ongoing education, we seek to deepen our understanding and awareness of these issues. By doing so, we can effectively advocate for and promote all aspects of inclusion, including diverse representation in our leadership and staff.</p>

        <p className='diversity-copy copy'>At DAC, we are determined to increase demographic diversity within our organization. We aspire to become an actively anti-racist company and a strong ally to the communities we serve. We recognize the importance of intentional efforts to support individuals of diverse ethnicities, abilities, genders, ages, and sexual orientations.</p>

        <p className='diversity-copy copy '>Incorporating diversity, equity, and inclusion practices is at the core of our daily work at DAC. We strive to integrate these principles into every aspect of our organization to ensure a welcoming and inclusive environment for all.</p>

        {/* <p className='impact-link'>Our <a href={require("../../Data/DRAFTDEIStrategicPlan.pdf")} download="DAC DEI Strategic Plan External" target="_blank" rel="noopener noreferrer" className='link-blue-text'>strategic plan </a>is in progress. Please check back for updated information.</p> */}

        <p className='diversity-committee-header'>Diversity, Equity, and Inclusion Committee</p>
        <ol className='diversity-committee-list diversity-copy'>
          <li>Nicole Radden, Chair</li>
          <li>Kira Johnson, Vice-Chair</li>
          <li>Maggie Ross, Secretary</li> 
          <li>Gildardo Amador</li>
          <li>Hilary Kushins</li>
          <li>Jaime Lopez</li>
          <li>Rehmi Ruiz</li>
        </ol>
      </div>
    </section>
  )
}