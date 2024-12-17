import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdOutlineArrowRight } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="f_get pb-2 pt-3 mt-5">
                <div className="container-fluid container-xl">
                    <div className="row c-pp">
                        <div className="col-12 col-lg-6">
                            <ul className="ul_f_i">
                                <li><a className='text-decoration-none' href="#">Terms
                                    &amp; Conditions</a></li>
                                <span>-</span>
                                <li><a className='text-decoration-none' href="#">Privacy
                                    Policy</a></li>
                                <span>-</span>
                                <li><a className='text-decoration-none' href="#">Disclaimer</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 mt-2 mt-lg-0">
                            <div className="soc_f d-flex justify-content-end align-items-center gap-2">
                                <p className="fol">Follow Us On</p> :
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f" aria-hidden="true" /><FaFacebook /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter" aria-hidden="true" /><FaYoutube /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in" aria-hidden="true" /><FaLinkedin /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram" aria-hidden="true" /><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="hr_h1" />
                    <div className="row justify-content-between c-pp ziipl-footer">
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <p className="fw-bold fs-6">Quick Links</p>
                            <ul className="f_ul1">
                                <li><MdOutlineArrowRight /><a href="#">Home</a></li>
                                <li><MdOutlineArrowRight /><a href="#">Top Destination</a></li>
                                <li><MdOutlineArrowRight /><a href="#about-us">About
                                    Us</a></li>
                                <li><MdOutlineArrowRight /><a href="#contact-us">Contact
                                    Us</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <p className=" fw-bold fs-6 ">Asia Packages</p>
                            <ul className="f_ul1">
                                <li><MdOutlineArrowRight /><a href="#asia/india">Travel
                                    to India</a></li>
                                <li><MdOutlineArrowRight /><a href="#asia/japan">Travel
                                    to Japan</a></li>
                                <li><MdOutlineArrowRight /><a href="#asia/vietnam">Travel
                                    to Vietnam</a></li>
                                <li><MdOutlineArrowRight /><a href="#asia/bali">Travel
                                    to Bali</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-3 mt-sm-0">
                            <p className="fw-bold fs-6">Usa Packages</p>
                            <ul className="f_ul1">
                                <li><MdOutlineArrowRight /><a href="#usa/new-york">Travel
                                    to New York</a></li>
                                <li><MdOutlineArrowRight /><a href="#usa/california">Travel
                                    to California</a></li>
                               
                                <li><MdOutlineArrowRight /><a href="#usa/florida">Travel
                                    to Florida</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-3 mt-md-0">
                            <p className="fw-bold fs-6">Canada Packages</p>
                            <ul className="f_ul1">
                                <li><MdOutlineArrowRight /><a href="#canada/toronto">Travel
                                    To Toronto</a></li>
                                <li><MdOutlineArrowRight /><a href="#canada/ontario">Travel
                                    to Ontario</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-5 col-lg-3 mt-3 mt-lg-0">
                            <p className="fw-bold fs-6">Contact Us Now</p>
                            <ul className="f_ul12 mt-3">
                                <li>
                                    <p className="mt-2 fs-7 fw-normal text-dark c_m"><img src="https://www.farecation.com/imgs/loc-2.png" />
                                        Address</p>
                                    <p className="mt-1 fs-7 fw-normal text-dark">Saket,New Delhi |110062|INDIA</p>
                                </li>
                                <li className="mt-2">
                                    <p className="mt-2 c_m fs-7 fw-normal text-dark"><img src="https://www.farecation.com/imgs/ph-11.png" />
                                        Phone</p>
                                   <MdOutlineArrowRight /> <a className="mt-1 num_bi" href="+91-8076801037">
                                   +91-8076801037</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 shadow text-center">
                            <p className="font_14">ZIIPL is registered affiliate
                                with Indain market authorized by Government of India</p>
                        </div>
                    </div>
                    <hr className="hr_h1 mt-0" />
                    <div className="row align-items-center c-pp">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            <p>Copyright 2024. All Rights are reserved by
                                ZIIPL.</p>
                        </div>
                        <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                            <div className="btns-2 d-flex justify-content-center justify-content-sm-end gap-2">
                                {/*<button>*/}
                                {/*    <img src="https://www.farecation.com/imgs/iata-img.webp">*/}
                                {/*</button>*/}
                                <button>
                                    <img src="https://www.farecation.com/imgs/tico-ca.webp" />
                                </button>
                                {/* <button>*/}
                                {/*    <img src="https://www.farecation.com/imgs/clin-logo.png">*/}
                                {/*</button>*/}
                                <button>
                                    <img src="https://www.farecation.com/imgs/visa-img.webp" />
                                </button>
                                <button>
                                    <img src="https://www.farecation.com/imgs/master-img.webp" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer