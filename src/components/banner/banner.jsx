  import React from 'react'
  import bannerHome from '../../asset/imgBanner.jpg'
  import bannerAbout from '../../asset/about.png'
  import './banner.css'
  
  
function banner({ page }) {
  return page === 'home' ? (
    <div className="bannerHome">
      <img className="bannerImg" src={bannerHome} alt="bannière" />
      <div className="bannerBg"></div>
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div> ):(
    <div className="bannerAbout">
      <img className="aboutImg" src={bannerAbout} alt="bannière" />
      <div className="bannerBg"></div>
    </div>
  )
  
  }
export default banner