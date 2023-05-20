import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "../css/dashboard-home.css"
import { MdDashboard, MdManageAccounts } from "react-icons/md"
import { SiSemanticscholar } from "react-icons/si"
const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(""); // Initialize activeLink state

  // Get the current pathname using the useLocation hook
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <>
      <section className="dashboard-container">
        <section className="d-c-left">
          <div className='d-c-l-top'>
            <Link to='/' className='logo'>
              <span>ScholarGo</span>
            </Link>
            <div className="d-navigator">
              <Link to="/dashboard/analytics" className={activeLink.startsWith("/dashboard/analytics") ? "d-navigator-active d-option" : "d-option"}>
                <MdDashboard />
                Dashboard
              </Link>
              <Link to="/dashboard/scholarships" className={activeLink.startsWith("/dashboard/scholarships")? "d-navigator-active d-option" : "d-option"}>
                <SiSemanticscholar />
                Scholarships
              </Link>
              <Link to="/dashboard/account" className={activeLink.startsWith("/dashboard/account") ? "d-navigator-active d-option" : "d-option"}>
                <MdManageAccounts />
                Accounts
              </Link>
            </div>

          </div>
          <div className="d-c-l-button">
            <Link to="/terms" className="link">Terms</Link>
            <a href="" className="link">ScholarGo</a>
            <Link to="/privacy-policy" className="link">Privacy Policy</Link>
            <Link to="/advertiser-disclosure" className="link">Advertiser disclosure</Link>
          </div>
        </section>
        <section className="dashboard-display">
          <Outlet />
        </section>
      </section>
    </>
  )
}

export default Dashboard