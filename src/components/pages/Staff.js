import React from 'react'
import { staffData } from '../../Data/staffData'
import StaffOffice from "./StaffOffice"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left.png"
import singlePageRight from "../../assets/imgs/graphics/singlepage_right.png"

export default function Staff() {

  const [staff, setStaff] = React.useState(staffData)

  function toggleOffice(id) {
    setStaff(prevData => prevData.map(data => {
      return data.id === id ? 
        {...data, showOffice: !data.showOffice} : 
        {...data, showOffice: false}
    }))
  }

  const allOffices = staff.map((item, index) => {
    return <StaffOffice
      key={index}
      item={item}
      toggleOffice={() => toggleOffice(item.id)}
    />
  })

  return (
    <section className='staff-section section staff-page-layout'>
      <img src={singlePageLeft} className="single-page-graphic staff-graphic-left" alt="" />
      <img src={singlePageRight} className="single-page-graphic staff-graphic-right" alt="" />
      
      <div className='single-page-content staff-content'>
        <h1 className='staff-main-header section-header'> Meet our Staff</h1>
        <p className='staff-copy copy'>Dependency Advocacy Center (DAC) is charged with providing statutorily required legal representation to indigent parents and children in Santa Clara County’s Juvenile Dependency Court. Pursuant to its contract with the State of California, DAC is responsible for providing multiple levels of conflict-free representation.  To achieve this, DAC’s strucutre is that of an umbrella organization with five segmented, independent law offices with social workers and mentor parents as part of the interdisciplinary legal teams.</p>
        
        <p className='staff-copy copy'>In addition, DAC provides interdisciplinary family defense legal services for families at risk of having their children removed and entering the formal child welfare system.  Corridor and First Call for Families are DAC’s two prevention programs.</p>

        {/* <p className='staff-copy copy'>For more information about Dependency Advocacy Center please submit your question <NavHashLink to="/#contact" className="link-blue-text">here</NavHashLink> or contact DAC’s Director of Operations, Nicole Radden at <NavHashLink className="link-blue-text">(408) 995-0714</NavHashLink>.</p> */}

        <div className='offices-container position-center'>
          {allOffices}
        </div>
      </div>
    </section>
  )
}