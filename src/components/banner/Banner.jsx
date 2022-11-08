import React from 'react'
import bannerHome from '../../asset/imgBanner.jpg'
import bannerAbout from '../../asset/about.png'
import './Banner.css'

function Banner({ page }) {
  return page === 'home' ? (
    <article className="bannerHome">
      <img className="bannerImg" src={bannerHome} alt="bannière" />
      <div className="bannerBg"></div>
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </article>
  ) : (
    <article className="bannerAbout">
      <img className="aboutImg" src={bannerAbout} alt="bannière" />
      <div className="bannerBg"></div>
    </article>
  )
}
export default Banner
