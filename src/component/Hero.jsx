import React from 'react';
import styles from '../css/hero.css';
import img1 from '../images/img.png';

function Hero() {
  return (
    <section className="hero">
        <div className="left-section">
            <h2 className='left-section-title'>Top Scholarships matched to you</h2>
            <p className='left-section-para'>Tell us who you are and where you’re headed to get matched with real scholarships to fund your education.</p>
            <button className='left-section-btn'>Join For Free</button>
        </div>

        <div className="right-section">
            <div className="right-section-image">
                <img src={img1} alt="" />
                {/* <p>image here</p> */}
            </div>

            <div className="right-section-text">
                <p className='right-section-para'>With the aid of Scholarship, I can continue on my journey of finding myself as a successfull illustartor.</p>
                <h2 className='right-section-para'>Morgan Heily</h2>
                <p className='right-section-para-light'>Verified winner of the "Follow your own Path" Scholarship.</p>
            </div>
        </div>
    </section>
  )
}

export default Hero;