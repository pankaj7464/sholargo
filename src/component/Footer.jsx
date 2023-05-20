import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
  const scholarshipCategories = [
    'Popular Scholarships',
    'Easy Scholarships',
    'No Essay Scholarships',
    'Scholarships for HS Seniors',
    'Scholarships for College Students',
    'Scholarships for Grad Students',
    'Scholarships for Women'
  ];

  const resources = [
    'Scholarship Directory',
    'Colleges',
    'Scholarships',
    'Student Loans',
    'Financial Aid',
    'College Admissions'
  ];

  const companyLinks = [
    'About',
    'Contact Us',
    'Press',
    'Do Not Sell My Personal Information'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Scholarships</h3>
            <ul>
              {scholarshipCategories.map((category, index) => (
                <li key={index}>
                  <Link to={`/scholarships/${category.replace(/\s+/g, '-').toLowerCase()}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={`/resources/${resource.replace(/\s+/g, '-').toLowerCase()}`}>{resource}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={`/company/${link.replace(/\s+/g, '-').toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} Your Scholarship Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
