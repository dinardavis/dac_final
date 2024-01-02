import React from 'react'
import { Link } from 'react-router-dom'
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom.png"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left.png"
import { boardData } from '../../Data/boardData';

  export default function Board() {
    const [boardBio, SetboardBio] = React.useState(boardData)

    return (
      <section className='board-section section single-page-layout'>
       <img src={singlePageTop} className='section-graphic single-page-graphic board-top' alt='' />
      <img src={singlePageLeft} className='section-graphic single-page-graphic board-left' alt='' />
      <img src={singlePageBottom} className="single-page-graphic single-page-bottom" alt="" />

      <div className='single-page-content board-content'>
        <h1 className='section-header single-page-header'>DAC Board of Directors</h1>

        {boardBio.map(board => {
          return <div className='board-profile'>
                    <div className='board-img-container'>
                      <img src={board.img} className="board-img" alt={`${board.first_name} ${board.last_name}`} />
                      <div className='board-img-graphic'></div>
                    </div>
                    <div className='board-info-container'>
                      <div className='board-name-container'>
                        {board.prefix_name && <h1 className='board-prefix-name'>{board.prefix_name}</h1>}
                        <h1 className='board-firstname'>{board.first_name}</h1>
                        <h1 className='board-lastname'>{board.last_name}</h1>
                        {board.suffix_name && <h1 className='board-comma'>,</h1>}
                        {board.suffix_name && <h1 className='board-suffi-name'>{board.suffix_name}</h1>}
                      </div>
                      {board.title && <h2 className='board-title'>{board.title}</h2>}

                      <div className='board-bio'> 
                        <p>{board.bio}</p>
                      </div>
                    </div>
                  </div>
        })}
      
        <p className='copy board-copy position-center'>If you are interested in serving on the DAC Board of Directors, please email Preeti Mishra at <Link className='link-blue-text'>pmishra@sccdac.org</Link>.</p>
      </div>
    </section>

    )
  }