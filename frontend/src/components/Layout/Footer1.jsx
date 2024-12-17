import React from 'react'
import zuberLogo from "../../assets/images/icon/zuberLogo.jpg"
import iata from "../../assets/images/iata-logo1.png"
import certified  from "../../assets/images/certified.png"
import playstore from "../../assets/images/get_on_playstore.png"
import  apple from "../../assets/images/apple_store.png"
import  trust from "../../assets/images/icon/trust_ft.png"

const Footer = () => {
  return (
    <div>
  {/* Footer Start */}
  <footer className="text-center text-lg-start text-muted bg-footer" style={{backgroundColor:"#132632"}}>
    <div className="pt-md-5 pt-4">
      <div className="container text-center text-md-start">
        <div className="row useful_link">
          <div className="col-md-6 col-lg-4 col-xl-4 col-12 mx-auto mb-md-4 mb-3 footer-field">
            <img src={zuberLogo} alt style={{maxWidth:"57px"}}/>
            <p className="fw-color mb-1" >ZIIPL is the most growing Company. </p>
            <p className="mb-1"> Saket,New Delhi |110062|INDIA</p>
            <p className='mail-font' ><span className="fw-bold " style={{fontSize:"13px"}}>Phone:</span>
              <a href="tel:9899626765" className="text-light  " style={{fontSize:"14px"}}>+91-8076801037</a><br />
              <span className="fw-bold" style={{fontSize:"13px"}}>For Info:</span>
              <a href="hr.ziipl.in@gmail.com" className="text-light " style={{fontSize:"14px"}}>hr.ziipl.in@gmail.com</a><br />
              <span className="fw" style={{fontSize:"13px"}}>Canada Base:</span>
              <a href="hr.ziipl.in@gmail.com" className="text-light" style={{fontSize:"14px"}}>hr.ziipl.in@gmail.com</a><br />
             
            </p>
          </div>
          <div className="col-md-6 col-lg-2 col-xl-3 col-6 mx-auto mb-md-4 mb-3 footer-field">
            <h2 className="fw-bold mb-xxl-4 mb-xl-3 mb-sm-3 mb-2" style={{fontSize:"17px"}}>Useful Links</h2>
            <ul className="footer_link">
              <li><a href="index-2.html">Flights</a></li>
              <li><a href="about_us.html">Hotels</a></li>
              <li><a href="career.html">Cars</a></li>
              {/* <li><a href="domestic-packages.html">Packages</a></li> */}
              <li><a href="contact_us.html">Contact Us</a></li>
              {/* <li><a href="faq.html">FAQ</a></li> */}
            </ul>
            <div className="ft-img">
              <img src={trust} alt />
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xl-3 col-6 mx-auto mb-md-4 mb-3 footer-field">
            <h2 className="fw-bold mb-xxl-4 mb-xl-3 mb-sm-3 mb-2"  style={{fontSize:"17px"}}>Quick Links</h2>
            <ul className="footer_link">
              <li><a href="caution.html">Explore</a></li>
              <li><a href="packages-policy.html">Policy</a></li>
              <li><a href="terms%26condition.html"> popular Flights Routes</a></li>
              <li><a href="refund-policy.html">Top India Destinations</a></li>
              <li><a href="services.html">Popular Hotel Destination</a></li>
              <li><a href="academy.html">Top International Destination</a></li>
             
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-2 col-12 mx-auto mb-md-4 mb-sm-3 footer-field">
            <h2 className="fw-bold mb-xxl-4 mb-xl-3 mb-sm-3 mb-2" style={{fontSize:"17px"}}> Top Airlines</h2>
            <ul className="footer_link ">
              <li><a href="akasha-air.html">Air India</a></li>
              <li><a href="air-india.html">American Airlines</a></li>
              <li><a href="vistara.html">Qatar Airways</a></li>
              <li><a href="spicejet.html">Ethihad Airways</a></li>
              <li><a href="indigo-airlines.html">Indigo Airlines</a></li>
              <li><a href="airlines.html">Jetblue Airlines</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="p-md-4 p-3" style={{backgroundColor: '#182128'}}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-5 col-md-6 col-lg-5 footer-last-text mb-2 mb-sm-0">
            <p> © Copyright <span className="fw-color"><a className="text-reset fw-bold" href="index.html"> Zuber International Indai Pvt Ltd</a></span> 2024. All Rights Reserved
            </p>
            <p> Managed by <span className="fw-color1"><a className="text-reset fw-bold" href="https://ziipl.com/">ziipal</a></span>
            </p>
          </div>
          <div className="col-12 col-sm-7 col-md-6 col-lg-7 pb-sm-0 pb-4">
            <div className="visa-sec align-items-center justify-content-md-end gap-md-2 gap-1">
              <img src={iata} className="img-fluid" alt />
              {/* <img src={certified} className="img-fluid" alt /> */}
              <img src={playstore} className="img-fluid" alt />
              <img src={apple} className="img-fluid" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer End  */}
</div>

  )
}

export default Footer