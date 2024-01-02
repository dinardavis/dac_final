import React from "react";
import { Link } from "react-router-dom";
import newsData from "../../Data/newsData";
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/singlepage_middle.png"
import { BiSolidRightArrow } from "react-icons/bi"

export default function NewsMain() {
  const articles = newsData.map((article) => {
    return (
      <Link to={`/updates-articles/${article.id}`} key={article.id}>
        <div className="article-container">
          <img className="article-img" src={`${article.img}`} alt={article.imgDesc} />
          <div className="article-copy">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-body">{article.body[0].slice(0,250)}<span>{article.body[0].length > 249 ? "..." : ""}</span></p>
            <Link to={`/updates-articles/${article.id}`} className='article-readmore'>
              <p className="link-blue-text">Full Article</p><BiSolidRightArrow />
            </Link>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section id="news-all" className=" article-section section single-page-layout">
      <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
      <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />

      <div className="articles-content">
        <h1 className="section-header">Dependency Advocacy Center News</h1>
        {/* <div className="articles-highlights" >
          <Link to={`/know-your-rights`} className="highlight pink-linear-gradient"><div>Be Informed! Know Your Rights</div></Link>
          <Link to={`/prevention-programs/#first-call`}className="highlight brick-linear-gradient"><div>Learn More About DAC's Prevention Resources</div></Link>
        </div> */}
        <div className="articles-container">
          {articles}
        </div>
      </div>
    </section>
  );
}
