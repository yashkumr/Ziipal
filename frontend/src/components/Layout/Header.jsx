import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import zuberLogo from "../../assets/images/icon/zuberLogo.jpg"
const Header = () => {
    return (
        <>
            <div>
                <div className="site-header">
                    {/* top header */}
                    <div className="top-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="top-main_class">
                                    <div className="top_social_media">
                                        <NavLink to="#" target="_blank" style={{ color: '#0866ff', padding: "5px", fontSize: "17px" }}>  <FaFacebook /></NavLink>
                                        <NavLink to="#" target="_blank" style={{ color: '#fc3925', padding: "5px", fontSize: "17px" }} aria-hidden="true" ><FaInstagram /> </NavLink>
                                        <NavLink to="#" target="_blank" style={{ color: '#ff0000', padding: "5px", fontSize: "17px" }} aria-hidden="true" > <FaYoutube /></NavLink>
                                        <NavLink to="#" target="_blank" style={{ color: '#000', padding: "5px", fontSize: "17px" }} ><FaTwitter /></NavLink>
                                        <NavLink to="#" target="_blank" style={{ color: '#0077b5', padding: "5px", fontSize: "17px" }} aria-hidden="true" ><FaLinkedin />
                                        </NavLink>
                                    </div>
                                    <div className="middle_bar">
                                        <a href="#"  className="apply" style={{textDecoration:"none"}}>Search Now</a>
                                    </div>
                                    <div className="last_numbar">
                                        <a href="tel:+91-7303555430" style={{textDecoration:"none"}}> +91- 9335140873</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="middle_bar_for_phone">
         <a href="apply_now.php" class="apply_phone">Apply Jobs</a>
      </div> */}
                        </div>
                    </div>
                    {/* end top header */}
                    {/* nav start  */}
                  
              
            

          
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a  className="navbar-brand logo" href="#" style={{maxWidth:"55px"}}> <img src={zuberLogo} /> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0 main-menu1">
                                <li className><a href="index-2.html" >HOME</a></li>
                                    <li className><a href="about_us.html">ABOUT US</a></li>
                                    <div className="dropdown">
                                        <div className="dropdown">
                                            <li><a href="#">SERVICES</a></li>
                                            <div className="dropdown-content">
                                                <a href="services.html">Our Services</a>
                                                <a href="counselling.html">Counselling</a>
                                                <a href="tourist-visa.html">Tourist Visa</a>
                                                <a href="student-visa.html">Student Visa</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown">
                                            <li><a href="#">PACKAGES</a></li>
                                            <div className="dropdown-content">
                                                <a href="domestic-packages.html">Domestic Packages</a>
                                                <a href="international-packages.html">International Packages</a>
                                                <a href="honeymoon-packages.html">Honeymoon Packages</a>
                                                <a href="family-packages.html">Family Packages</a>
                                            </div>
                                        </div>
                                    </div>
                                    <li><a href="career.html">CAREER</a></li>
                                    <li className><a href="contact_us.html">CONTACT US</a></li>
                                    {/* <li><a href="academy.html">ACADEMY</a></li> */}
                                    <li><a href="franchise.html">FRANCHISE</a></li>
                            </ul>

                            <div className="head-login">
                                <a className="btn-login" href="#" data-target="#login" data-toggle="modal" style={{textDecoration:"none"}}>Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            </div>

        </>
    )
}

export default Header