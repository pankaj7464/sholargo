import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../../../css/dashboard/d-scholarship.css"
const Scholarship = () => {
    const [activeLink, setActiveLink] = useState(""); // Initialize activeLink state

    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    

    return (
        <>
            <section className="scholarships-container">
                <div className="s-c-navbar">
                    <h2>Scholarships</h2>
                    <div className="s-c-n-navigator">
                        <Link to="/dashboard/scholarships" className={activeLink === "/dashboard/scholarships" ? "s-navigator-active " : ""}>Search</Link>
                        <Link to="/dashboard/scholarships/saved" className={activeLink === "/dashboard/scholarships/saved" ? "s-navigator-active " : ""}>Saved</Link>
                        <Link to="/dashboard/scholarships/applied" className={activeLink === "/dashboard/scholarships/applied" ? "s-navigator-active " : ""}>Applied</Link>
                    </div>
                </div>
               <section className="s-c-scholarshipcard-container">
                        <Outlet/>
               </section>
            </section>
        </>
    )
}

export default Scholarship