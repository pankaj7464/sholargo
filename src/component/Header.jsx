import React from 'react';
import styles from '../css/header.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-left">
          <div className="logo">
            <span>ScholarGO</span>
          </div>
        </div>

        <div className="header-center">
          <ul>
            <li className='header-item'>Discover</li>
            <li className='header-item'>Advice</li>
            <li className='header-item'>About</li>
            <li className='header-item'>Contact</li>
          </ul>
        </div>
        <div className="header-right">
          <span><FaSearch /></span>
          <Link to='/dashboard'>Login</Link>
          <button className='get-started-button'>Get Started</button>
        </div>
      </section>
    </>
  )
}

export default Header