import React from 'react';
import '../css/working.css';
import profile from '../images/card1.png';
import match from '../images/card2.png';
import applcn from '../images/card3.png';

function Working() {
  return (
    <section className="working">
      <section className="working-title">
        <h2 className='working-header'>How ScholarGo Works</h2>
      </section>

      <section className="working-card">
        <div className="card">
          <img src={profile} alt="img1" />
          <h2 className='card-text'>Create your Free Profile</h2>
          <p className='card-text'>Let us get to know you with details around your background, interests, and goals!</p>
        </div>
        <div className="card">
          <img src={match} alt="img1" />
          <h2 className='card-text card-h2'>Get personalized, vetted matches</h2>
          <p className='card-text'>We’ll instantly match you with scholarships you’ll love so you don’t have to spend hours searching yourself.</p>
        </div>
        <div className="card">
          <img src={applcn} alt="img1" />
          <h2 className='card-text card-h2'>Track applications with ease</h2>
          <p className='card-text'>Keep track of scholarship applications and apply to ScholarGo Exclusive scholarships entirely in-app!</p>
        </div>
      </section>
    </section>
  )
}

export default Working