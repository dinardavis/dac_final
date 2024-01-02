import React from 'react';
import programsGraphicRight from "../../assets/imgs/graphics/programs_graphic_right.png"
import programsGraphicLeft from "../../assets/imgs/graphics/programs_graphic_left.png"
import programsGraphicBottom from "../../assets/imgs/graphics/programs_graphic_bottom.png"
import programsGraphicRightBottom from "../../assets/imgs/graphics/programs_right_bottom.png"
import socialWorker from "../../assets/imgs/psychiatrist.jpg"
import mentors from "../../assets/imgs/mentors.jpg"
import attorneys from "../../assets/imgs/attorneys.jpg"
import firstCall from "../../assets/imgs/firstCall.jpg"
import corridor from "../../assets/imgs/corridor.jpg"

export default function ProgramsHome() {
  return (
    <section id="programs" className="programs-section section">
      <img src={programsGraphicLeft} className="section-graphic programs-left" alt="" />
      <img src={programsGraphicRight} className="section-graphic programs-right" alt="" />
      <img src={programsGraphicBottom} className="section-graphic programs-bottom" alt="" />
      <img src={programsGraphicRightBottom} className="section-graphic programs-right-bottom" alt="" />
      <h1 className='section-header programs-header position-center'>Our Programs</h1>
      <p className='programs-intro copy position-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='programs-content'> 
          <div className='program-container program-1'>
            <img src={attorneys} className="programs-img programs-img-1" alt="DAC attorneys" />
            <div className='programs-copy copy'>
              <h1 className='programs-subhead'>DAC attorneys</h1> 
              <p >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>           
            </div>
          </div>
          <div className='program-container program-2'>
            <img src={mentors} className="programs-img programs-img-2" alt="Mentor Parent" />
            <div className='programs-copy copy'>
              <h1 className='programs-subhead'>Mentor Parent Program</h1> 
              <p >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>           
            </div>
          </div>

          <div className='program-container program-3'>
            <img src={socialWorker} className="programs-img programs-img-3" alt="Mentor Parent" />
            <div className='programs-copy copy'>
              <h1 className='programs-subhead'>DAC Social Workers</h1> 
              <p >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>           
            </div>
          </div>

          <div className='program-container program-4'>
            <img src={firstCall} className="programs-img programs-img-4" alt="First Call" />
            <div className='programs-copy copy'>
              <h1 className='programs-subhead'>First Call For Families</h1> 
              <p >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>           
            </div>
          </div>

          <div className='program-container program-5'>
            <img src={corridor} className="programs-img programs-img-5" alt="Mentor Parent" />
            <div className='programs-copy copy'>
              <h1 className='programs-subhead'>The Corridor Program</h1> 
              <p >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>           
            </div>
          </div>
      </div>
    </section>
  )
}