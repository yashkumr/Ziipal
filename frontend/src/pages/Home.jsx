import React from 'react'
import Layout from '../components/Layout/Layout.jsx'
import banner1 from "../assets/images/banner/oneWayBanner1.jpg"
import banner2 from "../assets/images/banner/mulitWayBanner1.jpg"
import banner3 from "../assets/images/banner/multiWayBanner2.jpg"
import banner4 from "../assets/images/banner/oneWayBanner2.jpg"
import flightsTabbtn from "../assets/images/icon/flights-tabbtn-image.png"
import hotelTabbtn from "../assets/images/icon/hotel-tabbtn-image.png"
import carTabbtn from "../assets/images/icon/car-tabbtn-image.png"
import busTabbtn from "../assets/images/icon/bus-tabbtn-image-1.png"
import cruiseTabbtn from "../assets/images/icon/cruise-tabbtn-image.png"
import watch from "../assets/images/icon/watch.png"
import bali from "../assets/images/flights/bali.jpg"
import goa from "../assets/images/flights/goa.jpg"
import man from "../assets/images/icon/man.png"
import { FaFantasyFlightGames, FaHotel, FaCarSide } from "react-icons/fa";
import SlickSlider from '../components/Layout/SlickSlider.jsx'
import Farecation from '../components/Layout/Farecation.jsx'
import { NavLink } from 'react-router-dom'
import zuberLogo from "../assets/images/icon/zuberLogo.jpg"
import { FaExchangeAlt } from "react-icons/fa";



const Home = () => {
  return (
    <>
      <Layout>
        {/* Banner Start */}
        {/* <div>
          <div id="carouselExample" className="carousel slide" >
            <div className="carousel-inner " style={{ height: "70vh" }}>

              <div className="carousel-item active">
                <img src={banner3} className="d-block w-100" alt="banner1" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon d-none" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon d-none" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

        {/* Banner End */}


        {/* makeMyTrip section Start */}
        <div className="makeBg noAvifSupport bgGradient">


          <div className="header1">


            <div className="logo1">
              <NavLink to="#"> <img src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" /> </NavLink>
            </div>

            <div className="search1  rounded pb-5 mt-5">

              <section id="theme_search_form theme-search-form-new">
                <div className=" container-new" style={{ width: "96%", margin: "auto" }}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="theme_search_form_area mt-3 pt-3">

                        <div className="theme_search_form_tabbtn theme-search-form-area-tabRow makeMytrip"  >

                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="flights-tab" data-bs-toggle="tab" data-bs-target="#flights" type="button" role="tab" aria-controls="flights" aria-selected="true">

                                <img className="tabbtn-img-box" style={{ width: 60, height: 55 }} src={flightsTabbtn} alt />
                                Flights
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels" type="button" role="tab" aria-controls="hotels" aria-selected="false">

                                <img className="tabbtn-img-box" style={{ width: 60, height: 55 }} src={hotelTabbtn} alt />
                                Hotels
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="tours-tab" data-bs-toggle="tab" data-bs-target="#tours" type="button" role="tab" aria-controls="tours" aria-selected="false">
                                {/* <i class="fas fa-car"></i> */}
                                <img className="tabbtn-img-box" style={{ width: 60, height: 55 }} src={carTabbtn} alt />
                                Cars
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="bus-tab" data-bs-toggle="tab" data-bs-target="#bus" type="button" role="tab" aria-controls="bus" aria-selected="false">
                                {/* <i class="fas fa-bus"></i>  */}
                                <img className="tabbtn-img-box" style={{ width: 60, height: 55 }} src={busTabbtn} alt />
                                Bus
                              </button>
                            </li>
                            {/* <li class="nav-item" role="presentation">
                              <button class="nav-link" id="apartments-tab" data-bs-toggle="tab"
                                  data-bs-target="#apartments" type="button" role="tab" aria-controls="apartments"
                                  aria-selected="false"><i class="fas fa-building"></i> Visa</button>
                          </li> */}
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="cruise-tab" data-bs-toggle="tab" data-bs-target="#cruise" type="button" role="tab" aria-controls="cruise" aria-selected="false">
                                {/* <i class="fas fa-ship"></i> */}
                                <img className="tabbtn-img-box" style={{ width: 60, height: 55 }} src={cruiseTabbtn} alt />
                                Cruise
                              </button>
                            </li>

                          </ul>

                        </div>

                        <div className="tab-content tab-content-main " id="myTabContent">
                          <div className="tab-pane fade show active" id="flights" role="tabpanel" aria-labelledby="flights-tab">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="flight_categories_search flight-categories-search-tabRow">
                                  <ul className="nav nav-tabs gap-2" role="tablist">
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="oneway-tab" data-bs-toggle="tab" data-bs-target="#oneway_flight" type="button" role="tab" aria-controls="oneway_flight" aria-selected="true">One Way
                                      </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="roundtrip-tab" data-bs-toggle="tab" data-bs-target="#roundtrip" type="button" role="tab" aria-controls="roundtrip" aria-selected="false">Roundtrip
                                      </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="multi_city-tab" data-bs-toggle="tab"
                                        data-bs-target="#multi_city" type="button" role="tab"
                                        aria-controls="multi_city" aria-selected="false">Multi city
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="tab-content" id="myTabContent1">
                              <div className="tab-pane fade show active" id="oneway_flight" role="tabpanel" aria-labelledby="oneway-tab">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="oneway_search_form">
                                      <form action="#!">
                                        <div className="row">
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12 flight-search-from-content ps-lg-2 ps-md-1 ps-sm-0 ps-0 pe-sm-1 pe-0">
                                            <div className="flight_Search_boxed flight-Search-box" style={{ borderRadius: '10px 0px 0px 10px' }}>
                                              <p>From</p>
                                              <input type="text" defaultValue="Delhi (DEL)" />
                                              {/* <span>IGI - Indira Gandhi International...</span> */}
                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-departure" />
                                              </div>
                                            </div>
                                            {/* poppup modal home from box  */}
                                            <div className="flight-search-from-poppup bg-white p-3">
                                              <div className="row">
                                                <div className="col-12">
                                                  <div className="row recent-search-content gap-2 mb-3">
                                                    <div className="flight-search-poppup-heading">
                                                      <p>Recent Searches</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        <span className="recent-search-icon d-flex align-items-center justify-content-center">
                                                          <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div className="row gap-2">
                                                    <div className="flight-search-poppup-heading ">
                                                      <p>Popular Flights</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>DEL</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>New Delhi, Delhi, India.</p>
                                                        <span>Indira Gandhi Intl Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BOM</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Mumbai, Maharashtra, India.</p>
                                                        <span>Chatrapati Shivaji International Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>GOI</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Goa, Goa, India.</p>
                                                        <span>Dabolim Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BLR</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Bengaluru, Karnataka, India.</p>
                                                        <span>Kemgegowda, International, Airport.</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0 px-0 pe-0 flight-search-to-content">
                                            <div className="flight_Search_boxed flight-Search-box">
                                              <p>To</p>
                                              <input type="text" defaultValue="Hyderabad (HYD) " />
                                              {/* <span>HYD, Hyderabad, India</span> */}
                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-arrival" />
                                              </div>
                                              <div className="range_plan range-plan-icon " style={{ background: "#fff", borderRadius: "50%", padding: "9px", color: "skyblue" }}>

                                                <FaExchangeAlt />


                                              </div>
                                            </div>
                                            {/* poppup modal home to box  */}
                                            <div className="flight-search-to-poppup bg-white p-3">
                                              <div className="row">
                                                <div className="col-12">
                                                  <div className="row recent-search-content gap-2 mb-3">
                                                    <div className="flight-search-poppup-heading">
                                                      <p>Recent Searches</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        <span className="recent-search-icon d-flex align-items-center justify-content-center">
                                                          <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="row gap-2">
                                                    <div className="flight-search-poppup-heading ">
                                                      <p>Popular Flights</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>DEL</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>New Delhi, Delhi, India.</p>
                                                        <span>Indira Gandhi Intl Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BOM</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Mumbai, Maharashtra, India.</p>
                                                        <span>Chatrapati Shivaji International Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>GOI</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Goa, Goa, India.</p>
                                                        <span>Dabolim Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BLR</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Bengaluru, Karnataka, India.</p>
                                                        <span>Kemgegowda, International, Airport.</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-3  col-md-6 col-sm-12 col-12 p-0 px-md-1 px-0">
                                            <div className="form_search_date">
                                              <div className="flight_Search_boxed date_flex_area flight-Search-box">



                                                <div className="Journey_date">
                                                  <p>Journey date</p>
                                                  <input type="date" defaultValue="2024-03-01" />
                                                  {/* <span>Thursday</span> */}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-2 col-md-6 col-sm-12 col-12 p-0 pe-lg-1 pe-md-0 pe-sm-1 pe-0">
                                            <div className="flight_Search_boxed dropdown_passenger_area dropdown-passenger-area-box flight-Search-box">
                                              <p>Travellers &amp; Class</p>
                                              <div className="dropdown">
                                                <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">1 Traveller, Economy</button>
                                                {/*--- passenger box popup start ---*/}
                                                <div className="dropdown-menu dropdown_passenger_info dropdown-passenger-box" aria-labelledby="dropdownMenuButton1">
                                                  <div className="traveller-calulate-persons dropdown-passenger-content">
                                                    <div className="passengers">
                                                      <h5>Travellers</h5>
                                                      <div className="passengers-types">
                                                        <div className="passengers-type-new">
                                                          <div className="passenger-head">
                                                            <h6>Adults</h6>
                                                            <span>12 yrs or above</span>
                                                          </div>
                                                          <div className="passenger-count">
                                                            <span className="passenger-count-active">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type-new">
                                                          <div className="passenger-head">
                                                            <h6>Adults</h6>
                                                            <span>2 - 12 yrs</span>
                                                          </div>
                                                          <div className="passenger-count">
                                                            <span className="passenger-count-active count count">0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type-new">
                                                          <div className="passenger-head">
                                                            <h6>Children</h6>
                                                            <span>0 -2 yrs</span>
                                                          </div>
                                                          <div className="passenger-count">
                                                            <span className="passenger-count-active">0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                                                          </div>
                                                        </div>
                                                        <div className="passenger-text">
                                                          <div className="passenger-logo">
                                                            <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="GroupIcon" className="h-20 w-20" style={{ userSelect: 'none', display: 'inline-block' }}><path fillRule="evenodd" d="M12.7143 7.9076c0 1.3077-1.0844 2.4077-2.4717 2.4077-1.3873 0-2.4717-1.1-2.4717-2.4077C7.771 6.6 8.8553 5.5 10.2426 5.5c1.3873 0 2.4717 1.1 2.4717 2.4076Zm1.5014 0c0 2.1582-1.7788 3.9077-3.9731 3.9077s-3.9731-1.7495-3.9731-3.9077C6.2695 5.7496 8.0483 4 10.2426 4s3.9731 1.7495 3.9731 3.9076Zm2.3735 7.2162c-3.6311-3.4101-9.0438-3.4071-12.6844-.0148C2.155 16.7396 3.12 20 5.4813 20h9.5154c2.3467 0 3.3407-3.2345 1.5925-4.8762ZM4.7819 16.2579c3.1349-2.9211 7.804-2.9211 10.9262.011.8236.7735.3174 2.2282-.7114 2.2282H5.4813c-1.021 0-1.535-1.4607-.6994-2.2392Zm11.5044-3.4757c.1301-.3933.5548-.6067.9484-.4767 1.3435.4438 3.7739 1.6945 3.7739 4.3569 0 1.3963-1.0214 2.1463-2.0675 2.1463-.9682 0-.9682-1.5 0-1.5 1.7717-.4337-.8558-3.3712-2.1777-3.579a.7498.7498 0 0 1-.4771-.9475Zm-.6702-7.1478c-.9624-.0925-1.1135 1.3999-.1484 1.4927 1.9914.1915 1.767 2.9102-.2699 2.7143-.9624-.0926-1.1134 1.3998-.1484 1.4926 3.8917.3743 4.4702-5.0527.5667-5.6996Z" clipRule="evenodd" /></svg>
                                                          </div>
                                                          <div className="passenger-text-line">
                                                            <h4>Planning a trip for more than 9 travellers?</h4>
                                                            <a href="#">Create Group Booking</a>
                                                          </div>
                                                        </div>
                                                        <div className="passenger-cabin-selection">
                                                          <h3>Class</h3>
                                                          <div className="passenger-cabin-list">
                                                            <button className="passenger-cabin-list-active button">Economy</button>
                                                            <button type="button">Premium Economy</button>
                                                            <button type="button">Business</button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="passenger-done-btn">
                                                    <a href="#">Done</a>
                                                  </div>
                                                </div>
                                                {/*--- passenger box popup start ---*/}
                                              </div>
                                              {/* <span>Business</span> */}
                                            </div>
                                          </div>
                                          <div className="top_form_search_button p-0 col-lg-1" >
                                            <a href="#" className=" tab-search-btn">Search
                                              {/* <i class="fa fa-plane form_icon" aria-hidden="true"></i> */}
                                            </a>
                                          </div>
                                          <div className="col-md-12 col-12 pt-lg-3 pt-0">
                                            <div className="fare-box d-flex fare-box-new">
                                              <p className="fs-6">Select A Fare Type :</p>
                                              <div className="form-check ms-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                  Regular Fares
                                                </label>
                                              </div>
                                              <div className="form-check ms-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                  Student
                                                </label>
                                              </div>
                                              <div className="form-check ms-1">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                  Defence Forces
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="roundtrip" role="tabpanel" aria-labelledby="roundtrip-tab">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="oneway_search_form">
                                      <form action="#!">
                                        <div className="row">
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12 flight-search-from-content ps-md-2 ps-lg-3 pe-sm-1 pe-0 ps-0 ">
                                            <div className="flight_Search_boxed flight-Search-box" style={{ borderRadius: '10px 0px 0px 10px' }}>
                                              <p>From</p>
                                              <input type="text" defaultValue="Delhi (DEL)" />
                                              {/* <span>IGI - Indira Gandhi International...</span> */}
                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-departure" />
                                              </div>
                                            </div>
                                            {/* poppup modal home from box  */}
                                            <div className="flight-search-from-poppup bg-white p-3">
                                              <div className="row">
                                                <div className="col-12">
                                                  <div className="row recent-search-content gap-2 mb-3">
                                                    <div className="flight-search-poppup-heading">
                                                      <p>Recent Searchs</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        <span className="recent-search-icon d-flex align-items-center justify-content-center">
                                                          <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="row gap-2">
                                                    <div className="flight-search-poppup-heading ">
                                                      <p>Popular Flights</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>DEL</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>New Delhi, Delhi, India.</p>
                                                        <span>Indira Gandhi Intl Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BOM</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Mumbai, Maharashtra, India.</p>
                                                        <span>Chatrapati Shivaji International Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>GOI</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Goa, Goa, India.</p>
                                                        <span>Dabolim Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BLR</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Bengaluru, Karnataka, India.</p>
                                                        <span>Kemgegowda, International, Airport.</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0 px-0 pe-0 flight-search-to-content">
                                            <div className="flight_Search_boxed flight-Search-box">
                                              <p>To</p>
                                              <input type="text" defaultValue="Hyderabad (HYD) " />
                                              {/* <span>HYD, Hyderabad, India</span> */}
                                              <div className="plan_icon_posation">
                                                <i className="fas fa-plane-arrival" />
                                              </div>
                                              <div className="range_plan range-plan-icon">
                                                <i className="fas fa-exchange-alt" />
                                              </div>
                                            </div>
                                            {/* poppup modal home to box  */}
                                            <div className="flight-search-to-poppup bg-white p-3">
                                              <div className="row">
                                                <div className="col-12">
                                                  <div className="row recent-search-content gap-2 mb-3">
                                                    <div className="flight-search-poppup-heading">
                                                      <p>Recent Searchs</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        <span className="recent-search-icon d-flex align-items-center justify-content-center">
                                                          <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ScheduleIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M12.7358 7.98a.75.75 0 0 0-1.5 0v4.9844c0 .1989.0791.3897.2197.5303l2.2749 2.2749a.75.75 0 0 0 1.0606 0 .75.75 0 0 0 0-1.0606l-2.0552-2.0552V7.98Z" /><path fillRule="evenodd" d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-1.5 0c0 4.1421-3.3579 7.5-7.5 7.5S4.5 16.1421 4.5 12 7.8579 4.5 12 4.5s7.5 3.3579 7.5 7.5Z" clipRule="evenodd" /></svg>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>
                                                          DEL
                                                          <i className="fa fa-arrow-right" aria-hidden="true" />
                                                          BOM
                                                        </p>
                                                        <span>Fri, 14 Jun • 6 Travellers • Economy</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="row gap-2">
                                                    <div className="flight-search-poppup-heading ">
                                                      <p>Popular Flights</p>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>DEL</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>New Delhi, Delhi, India.</p>
                                                        <span>Indira Gandhi Intl Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BOM</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Mumbai, Maharashtra, India.</p>
                                                        <span>Chatrapati Shivaji International Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>GOI</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Goa, Goa, India.</p>
                                                        <span>Dabolim Airport.</span>
                                                      </div>
                                                    </div>
                                                    <div className="col-12 recent-search-content-box pb-2 pt-2 gap-3 d-flex align-items-center">
                                                      <div className="recent-search-icon d-flex align-items-center justify-content-center">
                                                        <span>BLR</span>
                                                      </div>
                                                      <div className="recent-search-flight-details">
                                                        <p>Bengaluru, Karnataka, India.</p>
                                                        <span>Kemgegowda, International, Airport.</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-3  col-md-6 col-sm-12 col-12 p-0 px-md-1 ps-md-2 ps-lg-1">
                                            <div className="form_search_date">
                                              <div className="flight_Search_boxed date_flex_area flight-Search-box">
                                                <div className="Journey_date flight-roundtrip-journey-date">
                                                  <p>Journey date</p>
                                                  <input type="date" defaultValue="2024-03-01" />
                                                  {/* <span>Thursday</span> */}
                                                </div>
                                                <div className="Journey_date flight-roundtrip-journey-date">
                                                  <p>Return date</p>
                                                  <input type="date" defaultValue="2024-03-08" />
                                                  {/* <span>Saturday</span> */}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-lg-2  col-md-6 col-sm-12 col-12 p-0 pe-sm-1 pe-0 pe-md-0 pe-lg-1">
                                            <div className="flight_Search_boxed dropdown_passenger_area dropdown-passenger-area-box flight-Search-box">
                                              <p>Travellers &amp; Class</p>
                                              <div className="dropdown">
                                                <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">1 Traveller, Economy</button>
                                                {/*--- passenger box popup start ---*/}
                                                <div className="dropdown-menu dropdown_passenger_info dropdown-passenger-box" aria-labelledby="dropdownMenuButton1">
                                                  <div className="traveller-calulate-persons dropdown-passenger-content">
                                                    <div className="passengers">
                                                      <h5>Travellers</h5>
                                                      <div className="passengers-types">
                                                        <div className="passengers-type-new">
                                                          <div className="passenger-head">
                                                            <h6>Adults</h6>
                                                            <span>12 yrs or above</span>
                                                          </div>
                                                          <div className="passenger-count">
                                                            <span className="passenger-count-active">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type-new">
                                                          <div className="passenger-head">
                                                            <h6>Adults</h6>
                                                            <span>2 - 12 yrs</span>
                                                          </div>
                                                          <div className="passenger-count">
                                                            <span className="passenger-count-active count count">0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                                                          </div>
                                                        </div>
                                                        <div className="passengers-type-new">
                                                          <div className="passenger-head">
                                                            <h6>Children</h6>
                                                            <span>0 -2 yrs</span>
                                                          </div>
                                                          <div className="passenger-count">
                                                            <span className="passenger-count-active">0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                                                          </div>
                                                        </div>
                                                        <div className="passenger-text">
                                                          <div className="passenger-logo">
                                                            <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="GroupIcon" className="h-20 w-20" style={{ userSelect: 'none', display: 'inline-block' }}><path fillRule="evenodd" d="M12.7143 7.9076c0 1.3077-1.0844 2.4077-2.4717 2.4077-1.3873 0-2.4717-1.1-2.4717-2.4077C7.771 6.6 8.8553 5.5 10.2426 5.5c1.3873 0 2.4717 1.1 2.4717 2.4076Zm1.5014 0c0 2.1582-1.7788 3.9077-3.9731 3.9077s-3.9731-1.7495-3.9731-3.9077C6.2695 5.7496 8.0483 4 10.2426 4s3.9731 1.7495 3.9731 3.9076Zm2.3735 7.2162c-3.6311-3.4101-9.0438-3.4071-12.6844-.0148C2.155 16.7396 3.12 20 5.4813 20h9.5154c2.3467 0 3.3407-3.2345 1.5925-4.8762ZM4.7819 16.2579c3.1349-2.9211 7.804-2.9211 10.9262.011.8236.7735.3174 2.2282-.7114 2.2282H5.4813c-1.021 0-1.535-1.4607-.6994-2.2392Zm11.5044-3.4757c.1301-.3933.5548-.6067.9484-.4767 1.3435.4438 3.7739 1.6945 3.7739 4.3569 0 1.3963-1.0214 2.1463-2.0675 2.1463-.9682 0-.9682-1.5 0-1.5 1.7717-.4337-.8558-3.3712-2.1777-3.579a.7498.7498 0 0 1-.4771-.9475Zm-.6702-7.1478c-.9624-.0925-1.1135 1.3999-.1484 1.4927 1.9914.1915 1.767 2.9102-.2699 2.7143-.9624-.0926-1.1134 1.3998-.1484 1.4926 3.8917.3743 4.4702-5.0527.5667-5.6996Z" clipRule="evenodd" /></svg>
                                                          </div>
                                                          <div className="passenger-text-line">
                                                            <h4>Planning a trip for more than 9 travellers?</h4>
                                                            <a href="#">Create Group Booking</a>
                                                          </div>
                                                        </div>
                                                        <div className="passenger-cabin-selection">
                                                          <h3>Class</h3>
                                                          <div className="passenger-cabin-list">
                                                            <button className="passenger-cabin-list-active button">Economy</button>
                                                            <button type="button">Premium Economy</button>
                                                            <button type="button">Business</button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="passenger-done-btn">
                                                    <a href="#">Done</a>
                                                  </div>
                                                </div>
                                                {/*--- passenger box popup start ---*/}
                                              </div>
                                              {/* <span>Business</span> */}
                                            </div>
                                          </div>
                                          <div className="top_form_search_button p-0 col-lg-1" style={{ height: 70 }}>
                                            <a href="flight-list.html" className="btn btn_theme btn_md tab-search-btn">Search
                                              {/* <i class="fa fa-plane form_icon" aria-hidden="true"></i> */}
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-md-12 col-12 pt-lg-3 pt-0">
                                          <div className="fare-box d-flex fare-box-new">
                                            <p className="fs-6">Select A Fare Type :</p>
                                            <div className="form-check ms-1">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Regular Fares
                                              </label>
                                            </div>
                                            <div className="form-check ms-1">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                              <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                Student
                                              </label>
                                            </div>
                                            <div className="form-check ms-1">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Defence Forces
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="multi_city" role="tabpanel" aria-labelledby="multi_city-tab">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="oneway_search_form">
                                      <form action="#!">
                                        <div className="multi_city_form_wrapper">
                                          <div className="multi_city_form">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>From</p>
                                                  <input type="text" defaultValue="Delhi (DEL)" />
                                                  <span>DAC, Hazrat Shahajalal International...</span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-departure" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>To</p>
                                                  <input type="text" defaultValue="London " />
                                                  <span>LCY, London city airport </span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-arrival" />
                                                  </div>
                                                  <div className="range_plan">
                                                    <i className="fas fa-exchange-alt" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="form_search_date">
                                                  <div className="flight_Search_boxed date_flex_area">
                                                    <div className="Journey_date">
                                                      <p>Journey date</p>
                                                      <input type="date" defaultValue="2024-05-05" />
                                                      <span>Thursday</span>
                                                    </div>
                                                    <div className="Journey_date">
                                                      <p>Return date</p>
                                                      <input type="date" defaultValue="2024-05-10" />
                                                      <span>Saturday</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                  <p>Passenger, Class </p>
                                                  <div className="dropdown">
                                                    <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">1 Traveller, Economy</button>
                                                    <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                                      <div className="traveller-calulate-persons">
                                                        <div className="passengers">
                                                          <h6>Passengers</h6>
                                                          <div className="passengers-types">
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count pcount">2</span>
                                                                <div className="type-label">
                                                                  <p>Adult</p>
                                                                  <span>12+
                                                                    yrs</span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button type="button" className="btn-add">
                                                                  <i className="fas fa-plus" />
                                                                </button>
                                                                <button type="button" className="btn-subtract">
                                                                  <i className="fas fa-minus" />
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count ccount">0</span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">Children</p>
                                                                  <span>2 - Less
                                                                    than 12
                                                                    yrs</span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button type="button" className="btn-add-c">
                                                                  <i className="fas fa-plus" />
                                                                </button>
                                                                <button type="button" className="btn-subtract-c">
                                                                  <i className="fas fa-minus" />
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count incount">0</span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">Infant</p>
                                                                  <span>Less
                                                                    than 2
                                                                    yrs</span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button type="button" className="btn-add-in">
                                                                  <i className="fas fa-plus" />
                                                                </button>
                                                                <button type="button" className="btn-subtract-in">
                                                                  <i className="fas fa-minus" />
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cabin-selection">
                                                          <h6>Cabin Class</h6>
                                                          <div className="cabin-list">
                                                            <button type="button" className="label-select-btn">
                                                              <span className="muiButton-label">Economy
                                                              </span>
                                                            </button>
                                                            <button type="button" className="label-select-btn active">
                                                              <span className="muiButton-label">Business</span>
                                                            </button>
                                                            <button type="button" className="label-select-btn">
                                                              <span className="MuiButton-label">First Class </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <span>Business</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="multi_city_form">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>From</p>
                                                  <input type="text" defaultValue="New York" />
                                                  <span>DAC, Hazrat Shahajalal International...</span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-departure" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed">
                                                  <p>To</p>
                                                  <input type="text" defaultValue="London " />
                                                  <span>LCY, London city airport </span>
                                                  <div className="plan_icon_posation">
                                                    <i className="fas fa-plane-arrival" />
                                                  </div>
                                                  <div className="range_plan">
                                                    <i className="fas fa-exchange-alt" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="form_search_date">
                                                  <div className="flight_Search_boxed date_flex_area">
                                                    <div className="Journey_date">
                                                      <p>Journey date</p>
                                                      <input type="date" defaultValue="2024-05-05" />
                                                      <span>Thursday</span>
                                                    </div>
                                                    <div className="Journey_date">
                                                      <p>Return date</p>
                                                      <input type="date" defaultValue="2024-05-12" />
                                                      <span>Saturday</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                  <p>Travellers &amp; Class</p>
                                                  <div className="dropdown">
                                                    <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">1 Traveller, Economy</button>
                                                    <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                                      <div className="traveller-calulate-persons">
                                                        <div className="passengers">
                                                          <h6>Passengers</h6>
                                                          <div className="passengers-types">
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count pcount">2</span>
                                                                <div className="type-label">
                                                                  <p>Adult</p>
                                                                  <span>12+
                                                                    yrs</span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button type="button" className="btn-add">
                                                                  <i className="fas fa-plus" />
                                                                </button>
                                                                <button type="button" className="btn-subtract">
                                                                  <i className="fas fa-minus" />
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count ccount">0</span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">Children</p>
                                                                  <span>2
                                                                    - Less
                                                                    than 12
                                                                    yrs</span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button type="button" className="btn-add-c">
                                                                  <i className="fas fa-plus" />
                                                                </button>
                                                                <button type="button" className="btn-subtract-c">
                                                                  <i className="fas fa-minus" />
                                                                </button>
                                                              </div>
                                                            </div>
                                                            <div className="passengers-type">
                                                              <div className="text">
                                                                <span className="count incount">0</span>
                                                                <div className="type-label">
                                                                  <p className="fz14 mb-xs-0">Infant</p>
                                                                  <span>Less
                                                                    than 2
                                                                    yrs</span>
                                                                </div>
                                                              </div>
                                                              <div className="button-set">
                                                                <button type="button" className="btn-add-in">
                                                                  <i className="fas fa-plus" />
                                                                </button>
                                                                <button type="button" className="btn-subtract-in">
                                                                  <i className="fas fa-minus" />
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="cabin-selection">
                                                          <h6>Cabin Class</h6>
                                                          <div className="cabin-list">
                                                            <button type="button" className="label-select-btn">
                                                              <span className="muiButton-label">Economy</span>
                                                            </button>
                                                            <button type="button" className="label-select-btn active">
                                                              <span className="muiButton-label">Business</span>
                                                            </button>
                                                            <button type="button" className="label-select-btn">
                                                              <span className="MuiButton-label">First Class </span>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <span>Business</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-12">
                                            <div className="add_multy_form">
                                              <button type="button" id="addMulticityRow">+ Add another flight</button>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-5 pt-2">
                                          <p>Select A Fare Type :</p>
                                          <div className="fare-box d-flex">
                                            <div className="form-check ms-1">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                              <label className="form-check-label" htmlFor="flexRadioDefault2">Regular Fares </label>
                                            </div>
                                            <div className="form-check ms-1">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                              <label className="form-check-label" htmlFor="flexRadioDefault3">Student</label>
                                            </div>
                                            <div className="form-check ms-1">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                              <label className="form-check-label" htmlFor="flexRadioDefault1">Defence Forces</label>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="top_form_search_button">
                                          <a href="flight-list.html" className="btn btn_theme btn_md">Search <i className="fa fa-plane form_icon" aria-hidden="true" /></a>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tours" role="tabpanel" aria-labelledby="tours-tab">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-12 col-sm-12 col-12 pe-0 flight-search-cars-city ps-1 ps-lg-2">
                                        <div className="flight_Search_boxed flight-Search-box" style={{ borderRadius: '10px 0px 0px 10px' }}>
                                          <p>Destination</p>
                                          <input type="text" placeholder="Enter City Name..." />
                                          {/* <span>Where are you going?</span> */}
                                        </div>
                                        {/*--- home tab cars popup content   ---*/}
                                        <div className="flight-search-cars-popup p-3">
                                          <div className="row">
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Delhi</h6>
                                                  <p>Delhi</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Mumbai</h6>
                                                  <p>Maharashtra</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Patna</h6>
                                                  <p>Bihar</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Lucknow</h6>
                                                  <p>Uttar Pradesh</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-12 col-sm-12 col-12 p-0 px-1 pe-0 flight-search-cars-city-pick">
                                        <div className="flight_Search_boxed flight-Search-box">
                                          <p>Pick Up</p>
                                          <input type="text" placeholder="Pick Up..." />
                                          {/* <span>Where are you going?</span> */}
                                        </div>
                                        {/*--- home tab cars pick up popup content   ---*/}
                                        <div className="flight-search-cars-pick-popup p-3">
                                          <div className="row">
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Lucknow</h6>
                                                  <p>Uttar Pradesh</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Delhi</h6>
                                                  <p>Delhi</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Mumbai</h6>
                                                  <p>Maharashtra</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Patna</h6>
                                                  <p>Bihar</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-12 col-sm-12 col-12 p-0 px-1 pe-0 flight-search-cars-city-drop">
                                        <div className="flight_Search_boxed flight-Search-box">
                                          <p>Drop Off</p>
                                          <input type="text" placeholder="Drop Off..." />
                                          {/* <span>Where are you going?</span> */}
                                        </div>
                                        {/*--- home tab cars drop off popup content   ---*/}
                                        <div className="flight-search-cars-drop-popup p-3">
                                          <div className="row">
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Delhi</h6>
                                                  <p>Delhi</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Patna</h6>
                                                  <p>Bihar</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Mumbai</h6>
                                                  <p>Maharashtra</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cars-content align-items-center py-sm-3 py-2">
                                                <div className="col-3 flight-search-cars-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-car" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-9 flight-search-cars-text">
                                                  <h6 className="fw-bold m-0">Lucknow</h6>
                                                  <p>Uttar Pradesh</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2 col-md-6 col-sm-12 col-12 p-0 px-1 pe-0">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area flight-Search-box">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input type="date" defaultValue="2024-05-03" />
                                              {/* <span>Thursday</span> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2  col-md-6 col-sm-12 col-12 p-0 px-1 pe-md-0 pe-lg-1">
                                        <div className="flight_Search_boxed dropdown_passenger_area flight-Search-box">
                                          <p>Time, Class </p>
                                          <div className="dropdown">
                                            <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> 0 am/pm</button>
                                            {/*--- search tab time box popup  ---*/}
                                            <div className="dropdown-menu dropdown_passenger_info dropdown-passenger-popup" aria-labelledby="dropdownMenuButton1">
                                              <div className="traveller-calulate-persons dropdown-passenger-wrapper">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type mb-3">
                                                      <div className="text"><span className="count pcount">1</span>
                                                        <div className="type-label"><p>am/pm</p></div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add"><i className="fas fa-plus" /></button>
                                                        <button type="button" className="btn-subtract"><i className="fas fa-minus" /></button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type mb-2">
                                                      <div className="text"><span className="count ccount">0</span>
                                                        <div className="type-label"><p className="fz14 mb-xs-0">Passenger</p></div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-c"><i className="fas fa-plus" /></button>
                                                        <button type="button" className="btn-subtract-c"><i className="fas fa-minus" /></button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count incount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">Infant</p>
                                                          <span>Less than 2 yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-in"><i className="fas fa-plus" /></button>
                                                        <button type="button" className="btn-subtract-in"><i className="fas fa-minus" /></button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button type="button" className="label-select-btn"><input type="text" placeholder="Name" /></button>
                                                    <button type="button" className="label-select-btn"><input type="email" placeholder="Email" /></button>
                                                    <button type="button" className="label-select-btn"><input type="tel" placeholder="Mobile" /></button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* <span>Day/Night</span> */}
                                        </div>
                                      </div>
                                      <div className="top_form_search_button p-0 col-lg-1" style={{ height: 70 }}>
                                        <button className="btn btn_theme btn_md tab-search-btn">Search</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-5 col-md-12 col-sm-12 col-12 pe-0 flight-search-hotel-box ps-1 ps-lg-2">
                                        <div className="flight_Search_boxed flight-Search-box" style={{ borderRadius: '10px 0px 0px 10px' }}>
                                          <p>Enter Hotel or City Name</p>
                                          <input type="text" placeholder="Enter Hotel or City Name" />
                                          {/* <span>Where are you going?</span> */}
                                        </div>
                                        {/*--- hotels popup modal content  ----*/}
                                        <div className="flight-search-hotels-popup bg-white p-3 ">
                                          <div className="row">
                                            <div className="col-12">
                                              <div className="row hotel-current-location-box mx-sm-2 mx-0 pb-sm-3 pb-2">
                                                <div className="col-2 hotel-current-icon">
                                                  <span className="d-flex align-items-center justify-content-center ">
                                                    <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="MyLocationIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path fillRule="evenodd" d="M12.0283 3a.7614.7614 0 0 1 .7614.7614v1.1544c3.328.3533 5.9726 2.9958 6.329 6.3228h1.1482a.7614.7614 0 0 1 0 1.5228h-1.1467c-.3505 3.3337-2.9978 5.9831-6.3305 6.3368v1.1404a.7614.7614 0 0 1-1.5228 0v-1.1404c-3.3327-.3537-5.98-3.0031-6.3306-6.3368H3.7897a.7614.7614 0 0 1 0-1.5228h1.1481c.3565-3.327 3.001-5.9696 6.3291-6.3228V3.7614A.7614.7614 0 0 1 12.0283 3Zm5.6086 9.007c0 3.0976-2.5111 5.6086-5.6086 5.6086-3.0976 0-5.6086-2.511-5.6086-5.6086 0-3.0975 2.511-5.6085 5.6086-5.6085 3.0975 0 5.6086 2.511 5.6086 5.6085Zm-3.5479-.0001c0 1.1381-.9226 2.0607-2.0607 2.0607-1.138 0-2.0606-.9226-2.0606-2.0607 0-1.138.9226-2.0606 2.0606-2.0606 1.1381 0 2.0607.9226 2.0607 2.0606Zm1.5228 0c0 1.9791-1.6044 3.5835-3.5835 3.5835-1.979 0-3.5834-1.6044-3.5834-3.5835 0-1.979 1.6044-3.5834 3.5834-3.5834 1.9791 0 3.5835 1.6044 3.5835 3.5834Z" clipRule="evenodd" /></svg>
                                                  </span>
                                                </div>
                                                <div className="col-10 d-flex align-items-center justify-content-between hotel-current-text">
                                                  <h4 className="m-0 fw-bold"> Use Current Location</h4>
                                                  <span>
                                                    <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="NearMeIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path fillRule="evenodd" d="M19.6569 3.8431a.6662.6662 0 0 1 .1609.6817l-5.1859 15.5575a.6662.6662 0 0 1-1.2635.001l-2.4977-7.454-7.454-2.4977a.6662.6662 0 0 1 .001-1.2635l15.5575-5.1859a.6662.6662 0 0 1 .6817.161ZM5.7297 9.5016l5.8788 1.97a.666.666 0 0 1 .4199.4199l1.9699 5.8788 4.1344-12.403-12.403 4.1343Z" clipRule="evenodd" /></svg>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="hotel-dest">
                                                <h3 className="m-0 fw-bold">Popular Destination</h3>
                                                <div className="row hotel-dest-content py-sm-3 py-2">
                                                  <div className="col-2 ps-0 hotel-dest-icon">
                                                    <span className="d-flex align-items-center justify-content-center ">
                                                      <svg width={30} height={30} fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="CityIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M6.8667 11.8989c-.2844 0-.515.2237-.515.4997 0 .276.2306.4997.515.4997s.515-.2237.515-.4997c0-.276-.2306-.4997-.515-.4997Zm-.515 2.4673c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Zm.515 1.5504c-.2844 0-.515.2238-.515.4997 0 .276.2306.4998.515.4998s.515-.2238.515-.4998c0-.2759-.2306-.4997-.515-.4997Zm-.515 2.5745c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Z" /><path fillRule="evenodd" d="M14.108 2.725v1.0175c1.2262.0899 1.738 1.1136 1.738 2.1692.6045.1099 1.062.6247 1.062 1.2433v5.0608h2.2851c1.1376 0 2.0598.8949 2.0598 1.9989v5.8132c0 .1629-.0201.3213-.058.4729h.058c.9961 0 .9961 1.4992 0 1.4992H2.7471c-.9961 0-.9961-1.4992 0-1.4992h.058a1.9473 1.9473 0 0 1-.058-.473V10.862c0-1.104.9222-1.999 2.0598-1.999h4.6345V7.1863c0-.6468.4881-1.1829 1.1264-1.2803 0-1.1665.6661-2.1686 1.9954-2.1686V2.7251c0-.9668 1.5448-.9668 1.5448 0Zm.1931 3.3993c0 .6186.4576 1.1334 1.0621 1.2433v4.8482c-1.2124 0-2.3378.7039-2.3378 1.9989v5.8132c0 .7848-2.0392.9323-2.0392-.0001V7.3734c.6383-.0974 1.1264-.6336 1.1264-1.2803 0-1.2543 2.1885-1.3465 2.1885.0312ZM9.4414 10.862c0-.276-.2306-.4998-.515-.4998H4.807c-.2844 0-.515.2238-.515.4998v9.1658c0 .2195.1458.4059.3485.473H9.093c.2026-.0671.3484-.2535.3484-.473V10.862Zm9.5908 9.6388c.3294 0 .6758-.061.6758-.4729v-5.8132c0-.276-.2305-.4997-.5149-.4997h-4.108c-.2844 0-.5149.2237-.5149.4997v5.8132c0 .4733.4366.4729.793.4729V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458h.5794V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458Z" clipRule="evenodd" /></svg>
                                                    </span>
                                                  </div>
                                                  <div className="col-10 hotel-dest-name">
                                                    <p>Jaipur</p>
                                                    <p>201 Properties</p>
                                                  </div>
                                                </div>
                                                <div className="row hotel-dest-content py-sm-3 py-2">
                                                  <div className="col-2 ps-0 hotel-dest-icon">
                                                    <span className="d-flex align-items-center justify-content-center ">
                                                      <svg width={30} height={30} fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="CityIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M6.8667 11.8989c-.2844 0-.515.2237-.515.4997 0 .276.2306.4997.515.4997s.515-.2237.515-.4997c0-.276-.2306-.4997-.515-.4997Zm-.515 2.4673c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Zm.515 1.5504c-.2844 0-.515.2238-.515.4997 0 .276.2306.4998.515.4998s.515-.2238.515-.4998c0-.2759-.2306-.4997-.515-.4997Zm-.515 2.5745c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Z" /><path fillRule="evenodd" d="M14.108 2.725v1.0175c1.2262.0899 1.738 1.1136 1.738 2.1692.6045.1099 1.062.6247 1.062 1.2433v5.0608h2.2851c1.1376 0 2.0598.8949 2.0598 1.9989v5.8132c0 .1629-.0201.3213-.058.4729h.058c.9961 0 .9961 1.4992 0 1.4992H2.7471c-.9961 0-.9961-1.4992 0-1.4992h.058a1.9473 1.9473 0 0 1-.058-.473V10.862c0-1.104.9222-1.999 2.0598-1.999h4.6345V7.1863c0-.6468.4881-1.1829 1.1264-1.2803 0-1.1665.6661-2.1686 1.9954-2.1686V2.7251c0-.9668 1.5448-.9668 1.5448 0Zm.1931 3.3993c0 .6186.4576 1.1334 1.0621 1.2433v4.8482c-1.2124 0-2.3378.7039-2.3378 1.9989v5.8132c0 .7848-2.0392.9323-2.0392-.0001V7.3734c.6383-.0974 1.1264-.6336 1.1264-1.2803 0-1.2543 2.1885-1.3465 2.1885.0312ZM9.4414 10.862c0-.276-.2306-.4998-.515-.4998H4.807c-.2844 0-.515.2238-.515.4998v9.1658c0 .2195.1458.4059.3485.473H9.093c.2026-.0671.3484-.2535.3484-.473V10.862Zm9.5908 9.6388c.3294 0 .6758-.061.6758-.4729v-5.8132c0-.276-.2305-.4997-.5149-.4997h-4.108c-.2844 0-.5149.2237-.5149.4997v5.8132c0 .4733.4366.4729.793.4729V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458h.5794V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458Z" clipRule="evenodd" /></svg>
                                                    </span>
                                                  </div>
                                                  <div className="col-10 hotel-dest-name">
                                                    <p>Amritsar</p>
                                                    <p>190 Properties</p>
                                                  </div>
                                                </div>
                                                <div className="row hotel-dest-content py-sm-3 py-2">
                                                  <div className="col-2 ps-0 hotel-dest-icon">
                                                    <span className="d-flex align-items-center justify-content-center ">
                                                      <svg width={30} height={30} fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="CityIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M6.8667 11.8989c-.2844 0-.515.2237-.515.4997 0 .276.2306.4997.515.4997s.515-.2237.515-.4997c0-.276-.2306-.4997-.515-.4997Zm-.515 2.4673c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Zm.515 1.5504c-.2844 0-.515.2238-.515.4997 0 .276.2306.4998.515.4998s.515-.2238.515-.4998c0-.2759-.2306-.4997-.515-.4997Zm-.515 2.5745c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Z" /><path fillRule="evenodd" d="M14.108 2.725v1.0175c1.2262.0899 1.738 1.1136 1.738 2.1692.6045.1099 1.062.6247 1.062 1.2433v5.0608h2.2851c1.1376 0 2.0598.8949 2.0598 1.9989v5.8132c0 .1629-.0201.3213-.058.4729h.058c.9961 0 .9961 1.4992 0 1.4992H2.7471c-.9961 0-.9961-1.4992 0-1.4992h.058a1.9473 1.9473 0 0 1-.058-.473V10.862c0-1.104.9222-1.999 2.0598-1.999h4.6345V7.1863c0-.6468.4881-1.1829 1.1264-1.2803 0-1.1665.6661-2.1686 1.9954-2.1686V2.7251c0-.9668 1.5448-.9668 1.5448 0Zm.1931 3.3993c0 .6186.4576 1.1334 1.0621 1.2433v4.8482c-1.2124 0-2.3378.7039-2.3378 1.9989v5.8132c0 .7848-2.0392.9323-2.0392-.0001V7.3734c.6383-.0974 1.1264-.6336 1.1264-1.2803 0-1.2543 2.1885-1.3465 2.1885.0312ZM9.4414 10.862c0-.276-.2306-.4998-.515-.4998H4.807c-.2844 0-.515.2238-.515.4998v9.1658c0 .2195.1458.4059.3485.473H9.093c.2026-.0671.3484-.2535.3484-.473V10.862Zm9.5908 9.6388c.3294 0 .6758-.061.6758-.4729v-5.8132c0-.276-.2305-.4997-.5149-.4997h-4.108c-.2844 0-.5149.2237-.5149.4997v5.8132c0 .4733.4366.4729.793.4729V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458h.5794V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458Z" clipRule="evenodd" /></svg>
                                                    </span>
                                                  </div>
                                                  <div className="col-10 hotel-dest-name">
                                                    <p>Hyderabad</p>
                                                    <p>551 Properties</p>
                                                  </div>
                                                </div>
                                                <div className="row hotel-dest-content py-sm-3 py-2">
                                                  <div className="col-2 ps-0 hotel-dest-icon">
                                                    <span className="d-flex align-items-center justify-content-center ">
                                                      <svg width={30} height={30} fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="CityIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M6.8667 11.8989c-.2844 0-.515.2237-.515.4997 0 .276.2306.4997.515.4997s.515-.2237.515-.4997c0-.276-.2306-.4997-.515-.4997Zm-.515 2.4673c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Zm.515 1.5504c-.2844 0-.515.2238-.515.4997 0 .276.2306.4998.515.4998s.515-.2238.515-.4998c0-.2759-.2306-.4997-.515-.4997Zm-.515 2.5745c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Z" /><path fillRule="evenodd" d="M14.108 2.725v1.0175c1.2262.0899 1.738 1.1136 1.738 2.1692.6045.1099 1.062.6247 1.062 1.2433v5.0608h2.2851c1.1376 0 2.0598.8949 2.0598 1.9989v5.8132c0 .1629-.0201.3213-.058.4729h.058c.9961 0 .9961 1.4992 0 1.4992H2.7471c-.9961 0-.9961-1.4992 0-1.4992h.058a1.9473 1.9473 0 0 1-.058-.473V10.862c0-1.104.9222-1.999 2.0598-1.999h4.6345V7.1863c0-.6468.4881-1.1829 1.1264-1.2803 0-1.1665.6661-2.1686 1.9954-2.1686V2.7251c0-.9668 1.5448-.9668 1.5448 0Zm.1931 3.3993c0 .6186.4576 1.1334 1.0621 1.2433v4.8482c-1.2124 0-2.3378.7039-2.3378 1.9989v5.8132c0 .7848-2.0392.9323-2.0392-.0001V7.3734c.6383-.0974 1.1264-.6336 1.1264-1.2803 0-1.2543 2.1885-1.3465 2.1885.0312ZM9.4414 10.862c0-.276-.2306-.4998-.515-.4998H4.807c-.2844 0-.515.2238-.515.4998v9.1658c0 .2195.1458.4059.3485.473H9.093c.2026-.0671.3484-.2535.3484-.473V10.862Zm9.5908 9.6388c.3294 0 .6758-.061.6758-.4729v-5.8132c0-.276-.2305-.4997-.5149-.4997h-4.108c-.2844 0-.5149.2237-.5149.4997v5.8132c0 .4733.4366.4729.793.4729V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458h.5794V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458Z" clipRule="evenodd" /></svg>
                                                    </span>
                                                  </div>
                                                  <div className="col-10 hotel-dest-name">
                                                    <p>Manali</p>
                                                    <p>349 Properties</p>
                                                  </div>
                                                </div>
                                                <div className="row hotel-dest-content py-sm-3 py-2">
                                                  <div className="col-2 ps-0 hotel-dest-icon">
                                                    <span className="d-flex align-items-center justify-content-center ">
                                                      <svg width={30} height={30} fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="CityIcon" style={{ userSelect: 'none', display: 'inline-block' }}><path d="M6.8667 11.8989c-.2844 0-.515.2237-.515.4997 0 .276.2306.4997.515.4997s.515-.2237.515-.4997c0-.276-.2306-.4997-.515-.4997Zm-.515 2.4673c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Zm.515 1.5504c-.2844 0-.515.2238-.515.4997 0 .276.2306.4998.515.4998s.515-.2238.515-.4998c0-.2759-.2306-.4997-.515-.4997Zm-.515 2.5745c0-.276.2306-.4997.515-.4997s.515.2237.515.4997c0 .276-.2306.4997-.515.4997s-.515-.2237-.515-.4997Z" /><path fillRule="evenodd" d="M14.108 2.725v1.0175c1.2262.0899 1.738 1.1136 1.738 2.1692.6045.1099 1.062.6247 1.062 1.2433v5.0608h2.2851c1.1376 0 2.0598.8949 2.0598 1.9989v5.8132c0 .1629-.0201.3213-.058.4729h.058c.9961 0 .9961 1.4992 0 1.4992H2.7471c-.9961 0-.9961-1.4992 0-1.4992h.058a1.9473 1.9473 0 0 1-.058-.473V10.862c0-1.104.9222-1.999 2.0598-1.999h4.6345V7.1863c0-.6468.4881-1.1829 1.1264-1.2803 0-1.1665.6661-2.1686 1.9954-2.1686V2.7251c0-.9668 1.5448-.9668 1.5448 0Zm.1931 3.3993c0 .6186.4576 1.1334 1.0621 1.2433v4.8482c-1.2124 0-2.3378.7039-2.3378 1.9989v5.8132c0 .7848-2.0392.9323-2.0392-.0001V7.3734c.6383-.0974 1.1264-.6336 1.1264-1.2803 0-1.2543 2.1885-1.3465 2.1885.0312ZM9.4414 10.862c0-.276-.2306-.4998-.515-.4998H4.807c-.2844 0-.515.2238-.515.4998v9.1658c0 .2195.1458.4059.3485.473H9.093c.2026-.0671.3484-.2535.3484-.473V10.862Zm9.5908 9.6388c.3294 0 .6758-.061.6758-.4729v-5.8132c0-.276-.2305-.4997-.5149-.4997h-4.108c-.2844 0-.5149.2237-.5149.4997v5.8132c0 .4733.4366.4729.793.4729V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458h.5794V16.155c0-.9667 1.5448-.9667 1.5448 0v4.3458Z" clipRule="evenodd" /></svg>
                                                    </span>
                                                  </div>
                                                  <div className="col-10 hotel-dest-name">
                                                    <p>Shimla</p>
                                                    <p>467 Properties</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-0 px-1 pe-0">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area flight-Search-box">
                                            <div className="Journey_date">
                                              <p>CHECK IN</p>
                                              <input type="date" defaultValue="2024-05-03" />
                                              {/* <span>Thursday</span> */}
                                            </div>
                                            <div className="Journey_date">
                                              <p>CHECK OUT</p>
                                              <input type="date" defaultValue="2024-05-05" />
                                              {/* <span>Thursday</span> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2  col-md-6 col-sm-12 col-12 p-0 px-1 pe-0 pe-lg-1">
                                        <div className="flight_Search_boxed dropdown_passenger_area flight-Search-box">
                                          <p>Guest, Rooms </p>
                                          <div className="dropdown">
                                            <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">0 Guest</button>
                                            {/*--- search tab guest box popup  ---*/}
                                            <div className="dropdown-menu dropdown_passenger_info dropdown-passenger-popup" aria-labelledby="dropdownMenuButton1">
                                              <div className="traveller-calulate-persons dropdown-passenger-wrapper">
                                                <div className="passengers">
                                                  <h6>Guest</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count pcount">2</span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+ yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count ccount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">Children</p>
                                                          <span>2 - Less than 12 yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-c">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-c">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count incount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">Infant</p>
                                                          <span>Less than 2 yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-in">
                                                          <i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-in">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Rooms</h6>
                                                  <div className="cabin-list">
                                                    <button type="button" className="label-select-btn">
                                                      <span className="muiButton-label">Luxary Rooms</span>
                                                    </button>
                                                    <button type="button" className="label-select-btn active">
                                                      <span className="muiButton-label">Deluxe Rooms</span>
                                                    </button>
                                                    <button type="button" className="label-select-btn">
                                                      <span className="MuiButton-label fs-6">Super Deluxe Room </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* <span>Luxary Rooms</span> */}
                                        </div>
                                      </div>
                                      <div className="top_form_search_button p-lg-0 px-3 col-lg-1" style={{ height: 70 }}>
                                        <a href="hotel-list.html" className="btn btn_theme btn_md tab-search-btn">Search
                                          {/* <i class="fa fa-plane form_icon" aria-hidden="true"></i> */}
                                        </a>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="tab-pane fade" id="apartments" role="tabpanel" aria-labelledby="apartments-tab">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="flight_Search_boxed">
                                          <p>Destination</p>
                                          <input type="text" placeholder="Where are you going?" />
                                          <span>Where are you going?</span>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input type="date" defaultValue="2024-05-03" />
                                              <span>Thursday</span>
                                            </div>
                                            <div className="Journey_date">
                                              <p>Return date</p>
                                              <input type="date" defaultValue="2024-05-05" />
                                              <span>Thursday</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                          <p>Passenger, Class </p>
                                          <div className="dropdown">
                                            <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> 0 Traveler</button>
                                            <div className="dropdown-menu dropdown_passenger_info" aria-labelledby="dropdownMenuButton1">
                                              <div className="traveller-calulate-persons">
                                                <div className="passengers">
                                                  <h6>Passengers</h6>
                                                  <div className="passengers-types">
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count pcount">2</span>
                                                        <div className="type-label">
                                                          <p>Adult</p>
                                                          <span>12+ yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add"><i className="fas fa-plus" /></button>
                                                        <button type="button" className="btn-subtract"><i className="fas fa-minus" /></button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count ccount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">
                                                            Children
                                                          </p><span>2
                                                            - Less than 12
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-c"><i className="fas fa-plus" />
                                                        </button>
                                                        <button type="button" className="btn-subtract-c">
                                                          <i className="fas fa-minus" />
                                                        </button>
                                                      </div>
                                                    </div>
                                                    <div className="passengers-type">
                                                      <div className="text"><span className="count incount">0</span>
                                                        <div className="type-label">
                                                          <p className="fz14 mb-xs-0">Infant</p>
                                                          <span>Less
                                                            than 2
                                                            yrs</span>
                                                        </div>
                                                      </div>
                                                      <div className="button-set">
                                                        <button type="button" className="btn-add-in">
                                                          <i className="fas fa-plus" /></button>
                                                        <button type="button" className="btn-subtract-in"><i className="fas fa-minus" /></button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="cabin-selection">
                                                  <h6>Cabin Class</h6>
                                                  <div className="cabin-list">
                                                    <button type="button" className="label-select-btn">
                                                      <span className="muiButton-label">Economy</span>
                                                    </button>
                                                    <button type="button" className="label-select-btn active">
                                                      <span className="muiButton-label">Business</span>
                                                    </button>
                                                    <button type="button" className="label-select-btn">
                                                      <span className="MuiButton-label">First Class </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span>Business</span>
                                        </div>
                                      </div>
                                      <div className="top_form_search_button mt-3">
                                        <button className="btn btn_theme btn_md">Search</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="bus" role="tabpanel" aria-labelledby="bus-tab">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="oneway_search_form">
                                          <div className="row">
                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 pe-0 bus-tab-from-box ps-1">
                                              <div className="flight_Search_boxed flight-Search-box" style={{ borderRadius: '10px 0px 0px 10px' }}>
                                                <p>From</p>
                                                <input type="text" defaultValue="Dhaka" />
                                                {/* <span>Bus Trtminal</span> */}
                                                <div className="plan_icon_posation">
                                                  <i className="fas fa-plane-departure" />
                                                </div>
                                              </div>
                                              {/* popup home bus box  */}
                                              <div className="flight-search-bus-from-popup p-3">
                                                <div className="row px-xl-2 px-0">
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Indore</h6>
                                                        <p>Maharashtra</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Delhi</h6>
                                                        <p>Delhi</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Hyderabad</h6>
                                                        <p>Telangana</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Goa</h6>
                                                        <p>Goa</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Kolkata</h6>
                                                        <p>West Bengal</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0 px-1 pe-0 bus-tab-to-box">
                                              <div className="flight_Search_boxed flight-Search-box">
                                                <p>To</p>
                                                <input type="text" defaultValue="Cox’s Bazar " />
                                                {/* <span>Bus Trtminal</span> */}
                                                <div className="plan_icon_posation">
                                                  <i className="fas fa-plane-arrival" />
                                                </div>
                                                <div className="range_plan range-plan-icon">
                                                  <i className="fas fa-exchange-alt" />
                                                </div>
                                              </div>
                                              {/* popup home bus box  */}
                                              <div className="flight-search-bus-to-popup p-3">
                                                <div className="row px-2">
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Indore</h6>
                                                        <p>Maharashtra</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Delhi</h6>
                                                        <p>Delhi</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Hyderabad</h6>
                                                        <p>Telangana</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Goa</h6>
                                                        <p>Goa</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="row flight-search-bus-content d-flex align-items-center justify-content-center">
                                                      <div className="col-3 col-sm-4 col-xl-3 bus-popup-icon">
                                                        <span className="d-flex align-items-center justify-content-center">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 22 22" style={{ color: 'black' }}><path fill="currentColor" fillRule="evenodd" d="M.644 21.905a.55.55 0 0 1 0-1.1h.353v-4.39a.55.55 0 0 1 .55-.55h2.028V6.315a.55.55 0 0 1 .55-.55h2.887V3.223a.55.55 0 0 1 .55-.55h.31V.645a.55.55 0 0 1 .55-.55h5.156a.55.55 0 0 1 .55.55v2.028h.31a.55.55 0 0 1 .55.55v5.761l3.133 1.567a.55.55 0 0 1 .304.492v1.809l2.274 1.136a.55.55 0 0 1 .304.492v6.325h.352a.55.55 0 1 1 0 1.1H.644ZM13.028 2.674H8.972V1.195h4.056v1.478Zm.55 1.1h.31v4.661l-.923-.461a.55.55 0 0 0-.796.492v12.34H9.83V6.316a.55.55 0 0 0-.55-.55H8.112V3.773H13.578Zm3.747 17.032h-4.056V9.356l.913.456.012.006.008.004 3.123 1.562v9.422Zm2.578 0h-1.478v-6.724l1.478.74v5.984Zm-13.75 0H4.675v-1.598a.55.55 0 0 0-1.1 0v1.598H2.097v-3.84h4.056v3.84Zm-1.478-4.94h2.028a.55.55 0 0 1 .55.55v4.39h1.478V6.866H4.675v8.998Zm10.622-.835a.55.55 0 0 0 .55-.55v-1.289a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm-8.044-4.846a.55.55 0 1 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Zm-.55 4.417a.55.55 0 0 0 .55-.55v-1.29a.55.55 0 0 0-1.1 0v1.29c0 .303.246.55.55.55Zm9.144 3.747a.55.55 0 0 1-1.1 0v-1.29a.55.55 0 0 1 1.1 0v1.29Z" clipRule="evenodd" /></svg>
                                                        </span>
                                                      </div>
                                                      <div className="col-9 col-sm-8 col-xl-9 bus-popup-text">
                                                        <h6 className="fw-bold m-0">Kolkata</h6>
                                                        <p>West Bengal</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-0 px-1 pe-0">
                                              <div className="form_search_date">
                                                <div className="flight_Search_boxed date_flex_area flight-Search-box">
                                                  <div className="Journey_date flight-roundtrip-journey-date">
                                                    <p>Journey date</p>
                                                    <input type="date" defaultValue="2024-05-05" />
                                                    {/* <span>Thursday</span> */}
                                                  </div>
                                                  <div className="Journey_date flight-roundtrip-journey-date">
                                                    <p>Return date</p>
                                                    <input type="date" defaultValue="2024-05-08" />
                                                    {/* <span>Saturday</span> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12 p-0 px-1">
                                              <div className="flight_Search_boxed dropdown_passenger_area dropdown-passenger-area-box flight-Search-box">
                                                <p>Travellers &amp; Class</p>
                                                <div className="dropdown">
                                                  <button className="dropdown-toggle final-count" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">1 Traveller, Economy</button>
                                                  {/*--- passenger box popup start ---*/}
                                                  <div className="dropdown-menu dropdown_passenger_info dropdown-passenger-box" aria-labelledby="dropdownMenuButton1">
                                                    <div className="traveller-calulate-persons dropdown-passenger-content">
                                                      <div className="passengers">
                                                        <h5>Travellers</h5>
                                                        <div className="passengers-types">
                                                          <div className="passengers-type-new">
                                                            <div className="passenger-head">
                                                              <h6>Adults</h6>
                                                              <span>12 yrs or above</span>
                                                            </div>
                                                            <div className="passenger-count">
                                                              <span className="passenger-count-active">1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                                                            </div>
                                                          </div>
                                                          <div className="passengers-type-new">
                                                            <div className="passenger-head">
                                                              <h6>Adults</h6>
                                                              <span>2 - 12 yrs</span>
                                                            </div>
                                                            <div className="passenger-count">
                                                              <span className="passenger-count-active count count">0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                                                            </div>
                                                          </div>
                                                          <div className="passengers-type-new">
                                                            <div className="passenger-head">
                                                              <h6>Children</h6>
                                                              <span>0 -2 yrs</span>
                                                            </div>
                                                            <div className="passenger-count">
                                                              <span className="passenger-count-active">0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                                                            </div>
                                                          </div>
                                                          <div className="passenger-text">
                                                            <div className="passenger-logo">
                                                              <svg width="1em" height="1em" fontSize="1.5rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="GroupIcon" className="h-20 w-20" style={{ userSelect: 'none', display: 'inline-block' }}><path fillRule="evenodd" d="M12.7143 7.9076c0 1.3077-1.0844 2.4077-2.4717 2.4077-1.3873 0-2.4717-1.1-2.4717-2.4077C7.771 6.6 8.8553 5.5 10.2426 5.5c1.3873 0 2.4717 1.1 2.4717 2.4076Zm1.5014 0c0 2.1582-1.7788 3.9077-3.9731 3.9077s-3.9731-1.7495-3.9731-3.9077C6.2695 5.7496 8.0483 4 10.2426 4s3.9731 1.7495 3.9731 3.9076Zm2.3735 7.2162c-3.6311-3.4101-9.0438-3.4071-12.6844-.0148C2.155 16.7396 3.12 20 5.4813 20h9.5154c2.3467 0 3.3407-3.2345 1.5925-4.8762ZM4.7819 16.2579c3.1349-2.9211 7.804-2.9211 10.9262.011.8236.7735.3174 2.2282-.7114 2.2282H5.4813c-1.021 0-1.535-1.4607-.6994-2.2392Zm11.5044-3.4757c.1301-.3933.5548-.6067.9484-.4767 1.3435.4438 3.7739 1.6945 3.7739 4.3569 0 1.3963-1.0214 2.1463-2.0675 2.1463-.9682 0-.9682-1.5 0-1.5 1.7717-.4337-.8558-3.3712-2.1777-3.579a.7498.7498 0 0 1-.4771-.9475Zm-.6702-7.1478c-.9624-.0925-1.1135 1.3999-.1484 1.4927 1.9914.1915 1.767 2.9102-.2699 2.7143-.9624-.0926-1.1134 1.3998-.1484 1.4926 3.8917.3743 4.4702-5.0527.5667-5.6996Z" clipRule="evenodd" /></svg>
                                                            </div>
                                                            <div className="passenger-text-line">
                                                              <h4>Planning a trip for more than 9 travellers?</h4>
                                                              <a href="#">Create Group Booking</a>
                                                            </div>
                                                          </div>
                                                          <div className="passenger-cabin-selection">
                                                            <h3>Class</h3>
                                                            <div className="passenger-cabin-list">
                                                              <button className="passenger-cabin-list-active button">Economy</button>
                                                              <button type="button">Premium Economy</button>
                                                              <button type="button">Business</button>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="passenger-done-btn">
                                                      <a href="#">Done</a>
                                                    </div>
                                                  </div>
                                                </div>
                                                {/* <span>Business</span> */}
                                              </div>
                                            </div>
                                            <div className="top_form_search_button p-0 col-lg-1" style={{ height: 70 }}>
                                              <button className="btn btn_theme btn_md tab-search-btn">Search</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div></form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="cruise" role="tabpanel" aria-labelledby="cruise-tab">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="tour_search_form">
                                  <form action="#!">
                                    <div className="row">
                                      <div className="col-lg-5 col-md-12 col-sm-12 col-12 pe-0 flight-search-cruise-box ps-1">
                                        <div className="flight_Search_boxed flight-Search-box" style={{ borderRadius: '10px 0px 0px 10px' }}>
                                          <p>Destination</p>
                                          <input type="text" placeholder="Where are you going?" />
                                          {/* <span>Where are you going?</span> */}
                                        </div>
                                        {/*  home tab cruise popup content */}
                                        <div className="flight-search-cruise-popup p-xl-3 p-2">
                                          <div className="row px-xl-3 px-2">
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-2 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-10 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Royal Caribbean International</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-2 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-10 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Carnival Cruise Line</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-2 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-10 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Disney Cruise Line</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-2 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-10 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Norwegian Cruise Line</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-2 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-10 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Princess Cruises</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-2 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-10 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Celebrity Cruises</h6>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-0 px-1 pe-0 flight-search-cruise-line-box">
                                        <div className="flight_Search_boxed flight-Search-box">
                                          <p>Cruise line</p>
                                          <input type="text" placeholder="American line" />
                                          {/* <span>Choose your cruise</span> */}
                                        </div>
                                        {/*  home tab cruise popup content */}
                                        <div className="flight-search-cruise-line-popup p-xl-3 p-2">
                                          <div className="row px-xl-3 px-2">
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-xl-2 col-3 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-xl-10 col-9 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Caribbean Islands</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-xl-2 col-3 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-xl-10 col-9 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Alaska</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-xl-2 col-3 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-xl-10 col-9 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Asia</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-xl-2 col-3 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-xl-10 col-9 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Norwegian Fjords</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-xl-2 col-3 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-xl-10 col-9 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">Mediterranean Sea</h6>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="row flight-search-cruise-content align-items-center py-sm-3 py-2">
                                                <div className="col-xl-2 col-3 flight-search-cruise-icon">
                                                  <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fa fa-ship" aria-hidden="true" />
                                                  </span>
                                                </div>
                                                <div className="col-xl-10 col-9 flight-search-cruise-text">
                                                  <h6 className="fw-bold m-0">South Pacific Islands</h6>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-2  col-md-6 col-sm-12 col-12 p-0 px-1">
                                        <div className="form_search_date">
                                          <div className="flight_Search_boxed date_flex_area flight-Search-box">
                                            <div className="Journey_date">
                                              <p>Journey date</p>
                                              <input type="date" defaultValue="2024-05-03" />
                                              {/* <span>Thursday</span> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="top_form_search_button p-0 col-lg-1" style={{ height: 70 }}>
                                        <button className="btn btn_theme btn_md tab-search-btn">Search</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            <div className="icons1 m-0 p-0 ">
              <ul className='userSection pushRight m-0 p-0'>

                <li className='makeFlex'>
                  <span className="landingSprite listYourPropertyIcon mx-1"> </span>
                  <div className='makeFlex flexOne column font10'>
                    <p className='font11'>List Your Property</p>
                    <p className='userPerText '>Grow Your Business !</p>
                  </div>
                </li>
                <li className='makeFlex myBizIntro'>
                  <span className="landingSprite lis myBizIcon mx-1"> </span>
                  <div className='makeFlex flexOne column font10'>
                    <p className='font11'>List Your Property</p>
                    <p className='userPerText '>Grow Your Business !</p>
                  </div>
                </li>
                <li className='makeFlex myBizIntro'>
                  <span className="landingSprite myTripsIcon mx-1"> </span>
                  <div className='makeFlex flexOne column font10'>
                    <p className='font11'>List Your Property</p>
                    <p className='userPerText '>Grow Your Business !</p>
                  </div>
                </li>
                <li className='lhUser userLoggedOut'>
                  <span className="landingSprite myIconWhite myTripsIcon mx-1"> </span>
                  <div className='font10'>
                    <p className='font11'>Login or Create Account</p>
                  </div>

                </li>

                <li className='eZlSok'>
                  <span className='kbXnxm '>
                    <span className='flags flagSprite in'> </span>
                    <span> <span> IN</span> "|" </span> <span> eng</span>
                    <span className='bBRZdk rYfcy '> </span>
                  </span>
                </li>

                <li className='eZlSok'>
                  <span className='kbXnxm'>
                    <span> BHD</span> <span className='bBRZdk rYfcy'> </span> </span>
                </li>
              </ul>
            </div>


          </div>
          {/* <div className="links1">
          <NavLink to="#">Women</NavLink>
              <NavLink to="#">Men</NavLink>
              <NavLink to="#">Girls</NavLink>
              <NavLink to="#">Boys</NavLink>


          </div> */}

        </div>
        {/* makeMyTrip section End */}

        {/* Search Form start */}


        {/* Search Form End */}

        {/* Hotel Section Start */}


        <div className="homeCardSlider-top mt-5">
          <h2 className="css-1w5ptfg"> Recommended Hotels</h2>
        </div>

        <div className='css-tpqrnd '>


          <div className="position-relative mt-4">
            <div className="MuiBox-root">
              <SlickSlider />
            </div>
          </div>

        </div>

        {/* Hotel Section End */}

        {/* Top places */}

        <section className="container-fluid mt-4" style={{ width: "96%", margin: "auto" }}>
          <div className="row c-pp">
            <div className="col-12 text-center">
              <p className="semi_t">All you need is travel...</p>
              <h3 className="ti-control mt-1">Navigate Your World, Country by
                <span className="color_red">Country</span>
              </h3>
            </div>

            <div className="col-12 ">
              <div className="travel-usa">

                <div className="">
                  <div className="cate-cont relative">
                    <img src="https://www.farecation.com/imgs/des-2.png" />
                    <div className="cate-content-t text-center">
                      <p className="cate-content-t-1">Travel
                        Europe</p>
                      <div className="btn-cate">
                        <p className="btn-d">5 Days &amp; 4
                          Nights</p>
                        <p>2N In Paris, 2N In Prague</p>
                      </div>
                      <div className="des-all-cate">
                        <p>Germany</p>
                        <span>|</span>
                        <p>Barcelona</p>
                        <span>|</span>
                        <p>Denmark</p>
                        <span>|</span>
                        <p>London</p>
                      </div>
                    </div>
                    <div className="cate-start text-center">
                      <div className="cate-1-start">
                        <p>Package Starts At</p>
                        <p className="rate-cate-1">&#8377; 45300.00</p>
                      </div>
                      <a href="tel:+91 8076801037" className="num-cate-n"><img src="https://www.farecation.com/imgs/ph-i.png" />
                        +91 8076801037</a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="cate-cont relative">
                    <img src="https://www.farecation.com/imgs/lond-i.png" />
                    <div className="cate-content-t text-center">
                      <p className="cate-content-t-1">Travel USA</p>
                      <div className="btn-cate">
                        <p className="btn-d">5 Days &amp; 4
                          Nights</p>
                        <p>2N In Paris, 2N In Prague</p>
                      </div>
                      <div className="des-all-cate">
                        <p>New York</p>
                        <span>|</span>
                        <p>Seattle</p>
                        <span>|</span>
                        <p>Los Angeles</p>
                        <span>|</span>
                        <p>Boston</p>
                      </div>
                    </div>
                    <div className="cate-start text-center">
                      <div className="cate-1-start">
                        <p>Package Starts At</p>
                        <p className="rate-cate-1">&#8377; 53310.00</p>
                      </div>
                      <a href="tel:+91 8076801037" className="num-cate-n"><img src="https://www.farecation.com/imgs/ph-i.png" />
                        +91 8076801037</a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="cate-cont relative">
                    <img src="https://www.farecation.com/imgs/asia-1.png" />
                    <div className="cate-content-t text-center">
                      <p className="cate-content-t-1">Travel Asia</p>
                      <div className="btn-cate">
                        <p className="btn-d">5 Days &amp; 4
                          Nights</p>
                        <p>2N In Vietnam, 2N In Bali</p>
                      </div>
                      <div className="des-all-cate">
                        <p>Vietnam</p>
                        <span>|</span>
                        <p>Bali</p>
                        <span>|</span>
                        <p>Japan</p>
                        <span>|</span>
                        <p>India</p>
                        <span>|</span>
                        <p>Malaysia</p>
                      </div>
                    </div>
                    <div className="cate-start text-center">
                      <div className="cate-1-start">
                        <p>Package Starts At</p>
                        <p className="rate-cate-1">&#8377; 429650.00</p>
                      </div>
                      <a href="tel:+91 8076801037" className="num-cate-n"><img src="https://www.farecation.com/imgs/ph-i.png" />
                        +91 8076801037</a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="cate-cont relative">
                    <img src="https://www.farecation.com/imgs/united-a.png" />
                    <div className="cate-content-t text-center">
                      <p className="cate-content-t-1">Travel United
                        Arab</p>
                      <div className="btn-cate">
                        <p className="btn-d">5 Days &amp; 4
                          Nights</p>
                        <p>2N In Paris, 2N In Prague</p>
                      </div>
                      <div className="des-all-cate">
                        <p>Dubai</p>
                        <span>|</span>
                        <p>Abu Dhabi</p>
                        <span>|</span>
                        <p>Sharjah</p>
                        <span>|</span>
                        <p>Palm Jumeirah</p>
                      </div>
                    </div>
                    <div className="cate-start text-center">
                      <div className="cate-1-start">
                        <p>Package Starts At</p>
                        <p className="rate-cate-1">&#8377; 44223.00</p>
                      </div>
                      <a href="tel:+91 8076801037" className="num-cate-n"><img src="https://www.farecation.com/imgs/ph-i.png" />
                        +91 8076801037</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* Top places end */}

        {/* From farecation */}

        <Farecation />
        {/* farecation end */}

        {/* Packeges */}

        <div className="" style={{ width: "96%", margin: "auto" }}>
          <h1 className='css-1w5ptfg'>ZiIpal’s Other Services</h1>

          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-sm-12 mb-4 mb-lg-0">
                <div className="box_area box-area-new mt-4 mt-sm-0">
                  <img src={flightsTabbtn} alt />
                  <h2>FLIGHTS</h2>
                  <p>Book flights easily with our platform. Compare fares, explore deals, and enjoy hassle-free booking for a seamless travel experience</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 mb-4 mb-lg-0">
                <div className="box_area box-area-new">
                  <img src={hotelTabbtn} alt />
                  <h2>HOTELS</h2>
                  <p>Experience luxury, comfort, and exceptional hospitality & Enjoy stunning views, modern amenities, and unforgettable stays
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 mb-4 mb-md-0">
                <div className="box_area box-area-new">
                  <img src={carTabbtn} alt style={{ maxHeight: "40px" }} />
                  <h2>CARS</h2>
                  <p>Explore captivating car books, from classic automobiles , featuring stunning photography, in-depth histories, and expert insights
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                <div className="box_area box-area-new">
                  <img src={man} alt />
                  <h2>OHTERS</h2>
                  <p>We’re truly humbled to have received volumes of
                    positive customer feedback for our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packeges End */}



      </Layout>

    </>
  )
}

export default Home