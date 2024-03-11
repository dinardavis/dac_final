import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom_white.png"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left.png"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Financials() {

  const [revenue, setRevenue] = React.useState({
    grants: 4532513,
    inkind: 63000,
    contributions: 21665,
    miscellaneous: 0
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
    // In future add 'Misc' to the array below if there is a value for this category
    labels: ['Grants & Contract Revenue', 'In-kind Contributions','Contributions',]
    ,
    datasets: [
      {
        label: '$',
        data: [ revenue.grants, revenue.inkind, revenue.contributions, revenue.miscellaneous],
        backgroundColor: [
          '#EF767A',
          '#861657', 
          'hsl(206, 25%, 80%)',
          '#004280',
        ],
        borderColor: [
          '#EF767A',
          '#861657',
          'hsl(206, 25%, 80%)',
          '#004280',
        ],
        borderWidth: 1,
      },
    ],
  };

  const [expsenses, setExpenses] = React.useState({
    program: 3995388,
    management: 277226,
    fundraising: 76574,
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

  
        <h1 className='section-header single-page-header'>FY2023 Annual Report Financials</h1>
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
            <p className='financials-table-header financials-subhead'>Revenue & Support	FY2023</p>
            <div>Grants & Contract Revenue</div>
            <div>$4,532,513</div> 
            <div>In-kind Contributions</div> 
            <div>$63,000</div> 
            <div>Contributions</div> 
            <div>$21,665</div> 
            <div className='financials-table-footer-blue'>Total Revenue & Support</div>
            <div className='financials-table-footer-blue'>$4,617,178</div>
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
            <p className='financials-table-header financials-subhead'>Functional Expenses FY2023</p>
            <div>Program</div>
            <div>$3,995,388</div> 
            <div>Management & General</div> 
            <div>$277,226</div> 
            <div>Fundraising</div> 
            <div>$76,574</div> 
            <div className='financials-table-footer-blue'>Total Expenses</div>
            <div className='financials-table-footer-blue'>$4,349,188</div>
          </div>
        </div>
        
      </div>
      </div>
      <div className='financials-content-bottom burgundy-linear-gradient'>
        <div className='financials-container'>
          <p className='section-subhead financials-section-subhead'>FY23 Statement of Financial Position</p>
          <div className='financials-table three-column'>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Assets</p>
              <div>Cash</div>
              <div>$1,324,721</div> 
              <div>Grants and contract receivables</div> 
              <div>$650,813</div> 
              <div>Prepaid expenses and deposits</div> 
              <div>$49,938</div>
              <div>Operating lease right-of-use asset, net</div> 
              <div>$118,258</div>  
              <div>Property and equipment, net</div> 
              <div>$22,252</div> 
              <div className='financials-table-footer-white'>Total Assets: </div>
              <div className='financials-table-footer-white'>$2,165,982</div>
            </div>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Liabilities</p>
              <div>Accounts Payable</div>
              <div>$23,182</div> 
              <div>Accrued Liabilities</div> 
              <div>$308,613</div> 
              <div>Operating lease liability </div> 
              <div>$130,218</div>  
              <div className='financials-table-footer-white'>Total Liabilities:</div>
              <div className='financials-table-footer-white'>$462,013</div>
            </div>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Net Assets</p>
              <div>Without donor restrictions</div>
              <div>$1,680,109</div> 
              <div>With donor restrictions</div> 
              <div>$23,860</div>   
              <div className='financials-table-footer-white'>Total Net Assets:</div>
              <p className='financials-table-footer-white'>$1,703,969</p>
            </div>   
          </div>
          <div className='main-table-footer'>Total Liabilities and Net Assets: $2,165,982</div>  
        </div>
  
          
        <div className='financials-copy-bottom copy-bottom'>
          <div className='financials-downloads-container'>
            <p className='section-subhead financials-section-subhead'>Financial Reports Downloads:</p>
            <div className='financials-downloads'>Form 990s:
              <a href={require("../../Data/FinancialReports/2019.990.pdf")} download="Form 990 YR2019" target="_blank" rel="noopener noreferrer" className='link-white-text'>2019</a>, 
              <a href={require("../../Data/FinancialReports/2020.990.pdf")} download="Form 990 YR2020" target="_blank" rel="noopener noreferrer" className='link-white-text'>2020</a>, 
              <a href={require("../../Data/FinancialReports/2021.990.pdf")} download="Form 990 YR2021" target="_blank" rel="noopener noreferrer" className='link-white-text'>2021</a>
            </div>
            <div className='financials-downloads'>Financial Audits: 

              <a href={require("../../Data/FinancialReports/FY21.Audit.pdf")} download="FY21 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY21</a>, 
              <a href={require("../../Data/FinancialReports/FY22.Audit.pdf")} download="FY22 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY22</a>,
              <a href={require("../../Data/FinancialReports/FY23.Audit.pdf")} download="FY23 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY23</a>
            </div>       
          </div>   
        </div>
        <img src={singlePageBottom} className='single-page-graphic single-page-bottom-lighter' alt='' />
      </div> 
    </section>
  )
}