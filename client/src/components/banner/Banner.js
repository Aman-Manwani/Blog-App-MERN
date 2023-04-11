import React from 'react';
import './Banner.css';
import BannerImg from './Banner_img.jpg'  

const Banner = () => {
  return (
    <div className='home_banner'>
      <img src={BannerImg} alt='Banner'  className='banner_img'></img>
        <h2>READ AND WRITE BLOGS ACCORDING TO YOUR PREFERNCES</h2>
    </div>
  )
}

export default Banner
