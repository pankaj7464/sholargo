import React, { useState } from 'react'
import ListingCard from './ListingCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search Term:', searchTerm);
    setSearchTerm('');
  };

  const scholarships = [
    {
      title: "Art Locally Scholarship",
      provider: "Keepgoingforward.org",
      description: "Are you a full-time postsecondary student majoring in engineering (or a related degree) with plans to pursue a career in the heating...",
      gradeLevel: "High School Seniors, College & Graduate Students",
      awards: 2,
      worth: "$500",
      deadline: "Dec 5, 2023"
    },
    {
      title: "Science Excellence Scholarship",
      provider: "STEM Foundation",
      description: "This scholarship is aimed at students who excel in science and wish to pursue a career in STEM fields.",
      gradeLevel: "High School Seniors, College & Graduate Students",
      awards: 5,
      worth: "₹10,000",
      deadline: "Jan 15, 2023"
    },
    {
      title: "Women in Technology Scholarship",
      provider: "TechWomen India",
      description: "This scholarship supports women pursuing degrees in technology-related fields and encourages gender diversity in the industry.",
      gradeLevel: "College & Graduate Students",
      awards: 3,
      worth: "₹25,000",
      deadline: "Feb 28, 2023"
    },
    // Add more scholarship objects here...
    {
      title: "Engineering Achievement Scholarship",
      provider: "India Engineering Association",
      description: "This scholarship recognizes outstanding engineering students who have demonstrated exceptional academic achievements and leadership qualities.",
      gradeLevel: "College & Graduate Students",
      awards: 2,
      worth: "₹50,000",
      deadline: "Mar 31, 2023"
    },
    {
      title: "Business Innovation Scholarship",
      provider: "Indian Chamber of Commerce",
      description: "The Business Innovation Scholarship is designed for students pursuing business-related degrees with innovative ideas for entrepreneurship.",
      gradeLevel: "College & Graduate Students",
      awards: 4,
      worth: "₹20,000",
      deadline: "Apr 15, 2023"
    },
    {
      title: "Medical Research Fellowship",
      provider: "Indian Medical Foundation",
      description: "This fellowship supports medical students and researchers conducting cutting-edge research in medical sciences.",
      gradeLevel: "Medical Students & Researchers",
      awards: 3,
      worth: "₹50,000",
      deadline: "May 30, 2023"
    },
    // Add more scholarship objects here...
  ];
  

  return (
    <>
      <section className="scholarship-search">
        <div className="s-s-filter">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        {
          scholarships.map(item => {
            return <>
              <ListingCard />
            </>
          })
        }
      </section>
    </>
  )
}

export default Search