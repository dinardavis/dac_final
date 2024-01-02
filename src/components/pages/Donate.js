import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/singlepage_middle.png"
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { BiSolidQuoteRight } from 'react-icons/bi'
import family from "../../assets/imgs/donate_family.png"

export default function Donate() {
  return (
    <section id="donate" className='section single-page-layout donate-section'>
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
      <div className='donate-content programs-intro position-center'>
        <div className='donate-copy-container' >
          <h1 className='donate-header text-center'>Support<br></br>Dependency Advocacy Center Today! </h1>

          <p className='copy donate-copy'>Dependency Advocacy Center (DAC) gratefully accepts donations of any size. DAC is a tax-exempt 501(c)3 nonprofit organization and your generous gift is tax-deductible as allowed by law. Your donation will go where it is needed most to support our work, unless you specify a particular use for your gift. Under the direction of the Board of Directors, DAC retains complete control over the use and distribution of donated funds in furtherance of its mission.</p>

          <div className='donate-img-container donate-img-container-mobile'>
            <img src={family} className="donate-img" alt='Mother, Father and child smiling and embracing'/>
            <p className='donate-quote'><BiSolidQuoteLeft className='donate-quote-left'></BiSolidQuoteLeft>
            My team (attorney, social worker and parent mentor) really understands me. They get me, they help me, and they want to see me succeed.<BiSolidQuoteRight className='donate-quote-right'></BiSolidQuoteRight></p>
          </div>  

          <form action="https://www.paypal.com/donate" method='post' target="_blank">
            <input type='hidden' name='hosted_button_id' value="T8Z43DNF4E776"></input>
            <button type="submit" className='donate-btn position-center'>Donate Now</button>
          </form>

        

          <p className='copy donate-copy'>Checks should be made payable to “Dependency Advocacy Center” and mailed to:</p>
          <ul className='copy donate-copy text-center'>
            <li>Dependency Advocacy Center</li>
            <li>31 N. 2nd Street, STE 300</li>
            <li>San Jose, CA 95113</li>
          </ul>

          <p className='donate-copy text-center copy-bold'>Thank you for your support!</p>
        </div>
        <div className='donate-img-container'>
          <img src={family} className="donate-img" alt='Mother, Father and child smiling and embracing'/>
          <p className='donate-quote'><BiSolidQuoteLeft className='donate-quote-left'></BiSolidQuoteLeft>
          My team (attorney, social worker and parent mentor) really understands me. They get me, they help me, and they want to see me succeed.<BiSolidQuoteRight className='donate-quote-right'></BiSolidQuoteRight></p>
        </div>  
      </div>
    </section>
  )
}