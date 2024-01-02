import * as React from "react";
import english_video from '../../../assets/imgs/firstcall_videos/firstcall_english.mp4'
import spanish_video from '../../../assets/imgs/firstcall_videos/firstcall_spanish.mp4'
import vietnamese_video from '../../../assets/imgs/firstcall_videos/firstcall_vietnamese.mp4'

// import english_video from '../../../assets/imgs/newsarticle_videos/15th_video.mp4'
// import spanish_video from '../../../assets/imgs/newsarticle_videos/15th_video.mp4'
// import vietnamese_video from '../../../assets/imgs/newsarticle_videos/15th_video.mp4'



export default function FirstCallVideos() {
  const [videoState, setVideoState] = React.useState({
    english: "block",
    spanish: "none",
    viet: "none",
  })

  let englishVideoElement;
  let spanishVideoElement;
  let vietVideoElement;

  React.useEffect(() => {
    setTimeout(() => {
      englishVideoElement = document.querySelector('.english-video');
    }, 1000);
  });

  if(document.querySelector('.english-video')){
    englishVideoElement = document.querySelector('.english-video')
  }

  if(document.querySelector('.spanish-video')){
    spanishVideoElement = document.querySelector('.spanish-video')
  }

  if(document.querySelector('.viet-video')){
    vietVideoElement = document.querySelector('.viet-video')
  }

  const englishVid = {
    display: videoState.english,
  }

  const spanishVid = {
    display: videoState.spanish,
  }

  const vietnameseVid = {
    display: videoState.viet,
  }

  function displayEnglish() {
    if(vietVideoElement) {
      vietVideoElement.pause()
    }
    if(spanishVideoElement) {
      spanishVideoElement.pause()
    }

    setVideoState({
      english: "block",
      spanish: "none",
      viet: "none",
    })
  }

  function displaySpanish() {
    setVideoState({
      english: "none",
      spanish: "block",
      viet: "none",
    })

    if(englishVideoElement) {
      englishVideoElement.pause()
    }
    if(vietVideoElement) {
      vietVideoElement.pause()
    }   
  }

  function displayViet() {
    setVideoState({
      english: "none",
      spanish: "none",
      viet: "block",
    })

    if(englishVideoElement) {
      englishVideoElement.pause()
    }
    if(spanishVideoElement) {
      spanishVideoElement.pause()
    } 
  }


  return (
    <div className='first-call-videos-content img-float-right'>
      <div className="first-call-video video-1">
        <div onClick={displayEnglish} className={`tab tab-1 ${videoState.english === "block" ? "active" : ""}`}>English</div>
        <div onClick={displaySpanish} className={`tab tab-2 ${videoState.spanish === "block" ? "active" : ""}`}>Español</div>
        <div onClick={displayViet} className={`tab tab-3 ${videoState.viet === "block" ? "active" : ""}`}>Tiếng Việt</div>
       
        <video className="video-file english-video" style={englishVid} controls src={english_video} type="video/mp4" />
        <video className="video-file spanish-video" style={spanishVid} controls src={spanish_video} type="video/mp4" />
        <video className="video-file viet-video" style={vietnameseVid} controls src={vietnamese_video} type="video/mp4" />
      </div>
    </div>
  )
}