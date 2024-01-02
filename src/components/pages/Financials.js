import React from 'react'
import { Link } from 'react-router-dom'
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom_white.png"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left.png"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Financials() {

  const [revenue, setRevenue] = React.useState({
    grants: 3802070,
    inkind: 38000,
    contributions: 22156,
    miscellaneous: 710
  })
  
  ChartJS.register(ArcElement, Tooltip, Legend);

  const styles = { 
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    onResize: null,
    resizeDelay: 0,
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  }
  
  const revenueData = {
    labels: ['Grants & Contract Revenue', 'In-kind Contributions','Contributions','Misc'],
    datasets: [
      {
        label: '$',
        data: [ revenue.grants, revenue.inkind, revenue.contributions, revenue.miscellaneous],
        backgroundColor: [
          '#EF767A',
          '#861657', 
          'hsl(206, 25%, 80%)',
          '#af253c',
        ],
        borderColor: [
          '#EF767A',
          '#861657',
          'hsl(206, 25%, 80%)',
          '#af253c',
        ],
        borderWidth: 1,
      },
    ],
  };

  const [expsenses, setExpenses] = React.useState({
    program: 3262262,
    management: 320048,
    fundraising: 96519,
  })
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  const expenseData = {
    labels: ["Program", "Management & General", "Fundraising"],
    datasets: [
      {
        label: '$',
        data: [ expsenses.program, expsenses.management, expsenses.fundraising],
        backgroundColor: [
          '#861657',
          'hsl(206, 25%, 80%)',
          '#EF767A',
        ],
        borderColor: [
          '#861657',
          'hsl(206, 25%, 80%)',
          '#EF767A',
        ],
        borderWidth: 1,
      },
    ],
  };





  return (
    <section className='single-page-layout financials-section'>
      <img src={singlePageTop} className='section-graphic single-page-graphic programs-top financials-top' alt='' />
      <img src={singlePageLeft} className='section-graphic single-page-graphic programs-left' alt='' />
      <div className='financials-content single-page-content'>
        <div className='financials-graphic-main'>

  
        <h1 className='section-header single-page-header'>FY2022 Annual Report Financials</h1>
        <div className='financials-graphic-container'>
          <div className='financials-graphic'>
            <p className='section-subhead financials-section-subhead'>Revenue & Support</p>
            {revenue ? <div className="budget-graph">
              <Doughnut 
                style={styles}
                className="donut-graph"
                data={revenueData}
                options={chartOptions}
              />
            </div> : null}
          </div>
          <div className='financials-table two-column'>
            <p className='financials-table-header financials-subhead'>Revenue & Support	FY2022</p>
            <div>Grants & Contract Revenue</div>
            <div>$3,802,070</div> 
            <div>In-kind Contributions</div> 
            <div>$38,000</div> 
            <div>Contributions</div> 
            <div>$2,215</div> 
            <div>Miscellaneous</div> 
            <div>$710</div> 
            <div className='financials-table-footer'>Total Revenue & Support</div>
            <div className='financials-table-footer'>$3,862,936</div>
          </div>
        </div>

        <div className='financials-graphic-container'>
          <div className='financials-graphic'>
            <p className='section-subhead'>Expenses</p>
            {revenue ? <div className="budget-graph">
              <Doughnut 
                className="donut-graph"
                data={expenseData}  
              />
            </div> : null}
          </div>
          <div className='financials-table two-column'>
            <p className='financials-table-header financials-subhead'>Revenue & Support	FY2022</p>
            <div>Program</div>
            <div>$3,262,262</div> 
            <div>Management & General</div> 
            <div>$320,048</div> 
            <div>Fundraising</div> 
            <div>$96,519</div> 
            <div className='financials-table-footer'>Total Expenses</div>
            <div className='financials-table-footer'>$3,678,829</div>
          </div>
        </div>
        
      </div>
      </div>
      <div className='financials-content-bottom burgundy-linear-gradient'>
        <div className='financials-container'>
          <p className='section-subhead financials-section-subhead'>FY22 Statement of Financial Position</p>
          <div className='financials-table three-column'>
            <div className='financials-table two-column'>
              <p className='financials-table-header financials-subhead'>Assets</p>
              <div>Cash</div>
              <div>$958,404</div> 
              <div>Grants and contract receivables</div> 
              <div>$700,694</div> 
              <div>Prepaid expenses and deposits</div> 
              <div>$48,804</div> 
              <div>Property and equipment, net</div> 
              <div>$21,640</div> 
              <div className='financials-table-footer'>Total Assets: </div>
              <div className='financials-table-footer'>$1,729,542</div>
            </div>
            <div className='financials-table two-column'>
              <p className='financials-table-header financials-subhead'>Liabilities</p>
              <div>Accounts Payable</div>
              <div>$17,886</div> 
              <div>Accrued Liabilities</div> 
              <div>$247,151</div> 
              <div>Deferred Rent</div> 
              <div>$28,526</div>  
              <div className='financials-table-footer'>Total Liabilities:</div>
              <div className='financials-table-footer'>$293,563</div>
            </div>
            <div className='financials-table two-column'>
              <p className='financials-table-header financials-subhead'>Net Assets</p>
              <div>Without donor restrictions</div>
              <div>$1,370,806</div> 
              <div>With donor restrictions</div> 
              <div>$65,173</div>   
              <div className='financials-table-footer'>Total Net Assets:</div>
              <p className='financials-table-footer'>$1,435,979</p>
            </div>   
          </div>
          <div className='main-table-footer'>Total Liabilities and Net Assets: $1,729,542</div>  
        </div>
  
          
        <div className='financials-copy-bottom copy-bottom'>
          <div className='financials-downloads-container'>
            <p className='section-subhead financials-section-subhead'>Financial Reports Downloads:</p>
            <p className='financials-downloads'>Form 990s: <Link className='link-white-text'>2019</Link>, <Link className='link-white-text'>2020</Link>, <Link className='link-white-text'>2021</Link></p>
            <p className='financials-downloads'>Financial Audits: <Link className='link-white-text'>FY20</Link>, <Link className='link-white-text'>FY21</Link>, <Link className='link-white-text'>FY22</Link></p>       
          </div>   
        </div>
        <img src={singlePageBottom} className='single-page-graphic single-page-bottom-lighter' alt='' />
      </div> 
    </section>
  )
}