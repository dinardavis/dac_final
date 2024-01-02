import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import newsData from "../../Data/newsData";
import BackButton from "../BackButton";
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageMiddle from "../../assets/imgs/graphics/singlepage_middle.png"
import articleVideo from '../../assets/imgs/newsarticle_videos/15th_video.mp4'

export default function NewsArticleDetail() {
  const params = useParams();
  const [currentArticle, setCurrentArticle] = React.useState(null);

  React.useEffect(() => {
    setCurrentArticle(
      newsData.filter((article) => parseInt(article.id) === parseInt(params.id))
    );
  }, [params.id]);

  React.useEffect(() => {
    if(currentArticle){ 
      if(currentArticle[0].video) {
        const articleBody = document.querySelector('.article-paragraph:nth-of-type(2)')
        let article_video = document.createElement("video")
        article_video.src = articleVideo;
        article_video.autoplay = false;
        article_video.controls = true;
        article_video.muted = false;
        article_video.type="video/mp4";
        article_video.height=300;
        article_video.classList.add("article-video", "img-float-left")
        articleBody.after(article_video)
      }
    }
  }, [currentArticle])

  
  return (
    <>
      {currentArticle && (
        <section className="section 
        single-page-layout">
          <img src={singlePageTop} className="single-page-graphic single-page-top" alt="" />
          <img src={singlePageMiddle} className="single-page-graphic single-page-middle" alt="" />
          <div className="article-detail-container">
            <BackButton />
            <div className="article-detail-content" >
              <div className="section-header article-detail-header">{currentArticle[0].title}</div>
              <img className="article-detail-img" src={`.${currentArticle[0].img}`} alt={currentArticle[0].imgDesc} />
            </div>
           
          
            <div className="article-detail-copy">
            {currentArticle[0].preface ?  <div className="article-detail-preface">
            {currentArticle[0].preface.map((item, index) => (
              <p className="copy" key={index}>{`${item}`}</p>
            ))}
            </div> : ""}
            {currentArticle[0].body.map((item, index) => (
              <p className="copy article-paragraph" key={index}>{`${item}`}</p>
            ))}
            {currentArticle[0].article_link_copy ? 
              <p className="copy">{currentArticle[0].article_link_copy} <Link to={currentArticle[0].article_link} className="link-blue-text" target="_blank">here</Link>.</p>
            : ""}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
