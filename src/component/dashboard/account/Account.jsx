import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../../../css/dashboard/d-account.css"
const Account = () => {
    const [activeLink, setActiveLink] = useState(""); // Initialize activeLink state

    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    

    return (
        <>
            <section className="scholarships-container">
                <div className="s-c-navbar">
                    <h2>Accounts setting</h2>
                    <div className="s-c-n-navigator">
                        <Link to="/dashboard/account" className={activeLink === "/dashboard/account" ? "s-navigator-active " : ""}>Account</Link>
                        <Link to="/dashboard/account/education" className={activeLink === "/dashboard/account/education" ? "s-navigator-active " : ""}>Education</Link>
                    </div>
                </div>
               <section className="s-c-scholarshipcard-container">
                        <Outlet/>
               </section>
            </section>
        </>
    )
}

export default Account