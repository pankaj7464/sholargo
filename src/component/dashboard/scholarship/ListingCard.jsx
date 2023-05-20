import React from 'react'
import { Link } from 'react-router-dom';
import { FaDollarSign, FaGraduationCap, FaCalendarTimes, FaRegStar } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import '../../../css/dashboard/listing-card.css';

function ListingCard() {
    return (
        <section className="listing-card">
            <div className="listing-content">
                <h2>Art Locally Scholarship</h2>
                <span>Offered by Keepgoingforward.org</span>
                <p>Are you a full-time postsecondary student majoring in engineering (or a related degree) with plans to pursue a career in the heating,..</p>
                <Link >Show More</Link>
            </div>

            <div className="listing-detail">
                <div className='listing-detail-part'>
                    <span className='icon'><FaDollarSign size={20} /></span>
                    <div className='listing-detail-para'>
                        <span>Grade Level:</span><br />
                        <span>High School Seniors, College & Graduate Students</span>
                    </div>
                </div>
                <div className='listing-detail-part'>
                    <span className='icon'><FaGraduationCap size={20} /></span>
                    <div className='listing-detail-para'>
                        <span>2 awards worth</span><br />
                        <span>$500</span>
                    </div>
                </div>
                <div className='listing-detail-part'>
                    <div  className='icon'><FaCalendarTimes size={20} /></div>
                    <div className='listing-detail-para'>
                        <span>DeadLine:</span><br />
                        <span>Dec 5, 2023</span>
                    </div>
                </div>
            </div>

            <div className="listing-apply">
                <button>Apply</button>
                <div className='listing-apply-icons'>
                    <span><FaRegStar size={24} /></span>
                    <span><RxCross1 size={24} /></span>
                </div>
            </div>
        </section>
    )
}

export default ListingCard;