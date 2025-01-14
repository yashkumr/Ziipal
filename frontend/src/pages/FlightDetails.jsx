import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdElderlyWoman } from "react-icons/md";
import { IoMan } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import Layout from '../components/Layout/Layout'
import { RiFlightTakeoffLine } from "react-icons/ri";
import Popup from "../components/popup";
import { useLocation, useParams } from "react-router-dom";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { IoIosCard } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { CurrencyContext } from "../context/CurrencyContext";


const FlightDetails = () => {

    const { currency, convertPrice } = useContext(CurrencyContext);

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobile: "",
        dob: "",
        cardHolderName: "",
        cardNumber: "",
        cardDetails: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postalCode: "",
    });

    //   const [totalAmount, setTotalAmount] = useState(flight || 0);
    // const [totalAmount, setTotalAmount] = useState(flight?.fare?.adults || 0);



    const [step, setStep] = useState(1);
    const [popup, setPopup] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const flight = location.state?.flight || [];
   


   
 

    // const searchData = location?.state?.location?.search
    // console.log(searchData?.split('&')[0].split('=')[1]);
    const params = new URLSearchParams(location?.state?.location?.search);
    const adt = params.get("adults");
    const ift = params.get("infants");
    const chd = params.get("children");

    const grandTotal = Number(convertPrice(flight?.fare?.adults * adt, currency)) + Number(convertPrice(flight?.fare?.infants * ift, currency)) + Number(convertPrice(flight?.fare?.children * chd, currency));
    
    console.log(grandTotal);
    console.log(typeof convertPrice(flight?.fare?.adults * adt, currency)); // Should be "number"

    // {convertPrice(flight?.fare?.adults, currency)}



    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });


    };


    // Handle form submission
    const handleSubmit = async (e) => {
        
        e.preventDefault()
        try {
           
            const finalData = { ...formData, flight,grandTotal, adt, ift, chd };
            const { data } = await axios.post('/api/v1/flights/travel/getbill', finalData);
            // console.log( data);
            toast.success("Form submitted successfully!");
            setPopup(true);

        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Failed to submit the form. Please try again.");

        };

    }

        // const flight = flights.find((flight) => flight.id === id);

        // console.log(flight);

        const detailcontactswap = () => {
            setStep(2);
        }

        const backondetailsec = () => {
            setStep(1);
        }
        const forwordonbillingsec = () => {
            setStep(3);
        }
        const ClientInfoPage = (e) => {
            setStep(2);
        }
        // const popupShow = (e) => {
        //     e.preventDefault();
        //     setPopup(true);
        // }
        const popupHide = (e) => {
            setPopup(false);
            setStep(1);
        }



        const getTimeAndDate = (dateTimeString) => {
            const date = new Date(dateTimeString);
            return {
                time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                date: date.toLocaleDateString(),
            };
        };

        return (
            <Layout title="ZIIPL | Flight Details">
                <>

                    <form onSubmit={handleSubmit}>


                        <div className="queryparent">

                            {popup ? <Popup popupHide={popupHide} /> : null}

                            {step === 1 ? <div className="leftside">
                                <div className="top">
                                    <RiFlightTakeoffLine className="fs-4" />
                                    <h2>Flight Detail</h2>
                                </div>

                                <div className="departsec">
                                    <div className="departfrom">
                                        <RiFlightTakeoffLine className="fs-4" />
                                        <p className="fs-5">{flight?.cityFrom} - {flight?.cityTo}  <span className="fs-6 test-gray">| {Object.values(flight?.route)?.[Object.values(flight?.route).length - 1] && (() => {
                                            const lastRoute = Object.values(flight?.route)?.[Object.values(flight?.route).length - 1];
                                            const arrival = getTimeAndDate(lastRoute?.local_arrival);
                                            return (

                                                // <strong>{arrival.time}</strong>
                                                <strong>{arrival.date}</strong>

                                            );
                                        })()}</span></p>
                                    </div>
                                    <div className="departalldetail">
                                        <div className="departalldetailfirst">
                                            <div className="logo">
                                                <RiFlightTakeoffLine className="fs-3 mt-2 text-success" />
                                                <button>saver</button>
                                            </div>
                                            <div className="departalldetailfirst2">
                                                <p className="fs-5">{flight.airlinesName.name}</p>
                                                <p>{flight?.airlines[0]}-{flight?.flightarray?.flight_no[0]}</p>
                                                <p className="weight text-danger">{flight?.availability?.seats} Seats Left!</p>

                                            </div>
                                        </div>
                                        <div className="departalldetailsecond">
                                            <p className="fs-3">{Object.values(flight?.route)?.[0] && (() => {
                                                const firstRoute = Object.values(flight?.route)?.[0];
                                                const departure = getTimeAndDate(firstRoute?.local_departure);
                                                return (
                                                    <div>
                                                        <strong> {departure.time} </strong>

                                                        <p>{departure.date}</p>
                                                    </div>
                                                );
                                            })()}</p>
                                            <p className="fs-6">{flight?.cityFrom}({flight?.cityCodeFrom})</p>
                                            {/* <p>Thu-26Dec2024</p> */}
                                            {/* <p>Terminal - T2</p> */}
                                            <p className="fs-9">Indra Gandhi (TD-1)</p>
                                        </div>
                                        <div className="departalldetailthird">
                                            <p>
                                                {Math.floor(
                                                    Object.values(flight?.route || {}).reduce((sum, f) => sum + (f.durationInMinutes || 0), 0) / 60
                                                )}h : {Object.values(flight?.route || {}).reduce((sum, f) => sum + (f.durationInMinutes || 0), 0) % 60}m
                                            </p>
                                            <hr />
                                            <p>
                                                <strong>
                                                    {flight?.route ? JSON.stringify(Object.keys(flight.route).length) : "Route is undefined"}
                                                </strong> stops
                                            </p>
                                            <button>refundable</button>
                                        </div>
                                        <div className="departalldetailsecond">
                                            <p className="fs-3">{Object.values(flight?.route)?.[Object.values(flight?.route).length - 1] && (() => {
                                                const lastRoute = Object.values(flight?.route)?.[Object.values(flight?.route).length - 1];
                                                const arrival = getTimeAndDate(lastRoute?.local_arrival);
                                                return (
                                                    <div>
                                                        <strong>{arrival.time}</strong>
                                                        <p>{arrival.date}</p>
                                                    </div>
                                                );
                                            })()}</p>
                                            <p className="fs-6">{flight?.cityTo}({flight?.cityCodeTo})</p>

                                            {/* <p>Terminal - T2</p> */}
                                            <p>Chattrpati Shivaji (T-1)</p>
                                        </div>

                                    </div>
                                </div>

                            </div> :
                                step === 2 ? <div className="queryforminput">

                                    <div className="top">
                                        <MdOutlineContactPhone className="fs-4" />
                                        <p className="fs-4">Contact details</p>
                                        <p onClick={backondetailsec} className="back"><IoArrowBack className="fs-6 mb-1 text-danger" />Back</p>
                                    </div>

                                    <div >
                                        <div>
                                            <label htmlFor="firstName">First Name:</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="middleName"> middle name:</label>
                                            <input type="text" id="middleName" placeholder="middle name" value={formData.middleName} onChange={handleInputChange} required />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName">last name:</label>
                                            <input type="text" id="lastName" placeholder="last name" value={formData.lastName} onChange={handleInputChange} required />
                                        </div>

                                        <div>
                                            <label htmlFor="dob">date of birth:</label>
                                            <input type="date" id="dob" placeholder="type your dob" value={formData.dob} onChange={handleInputChange} required />
                                        </div>

                                        <div>
                                            <label htmlFor="email">email:</label>
                                            <input type="email" id="email" placeholder=" email" value={formData.email} onChange={handleInputChange} required />
                                        </div>


                                        <div>
                                            <label htmlFor="mobile">mobile no:</label>
                                            <input type="number" id="mobile" placeholder=" mobile no" value={formData.mobile} onChange={handleInputChange} required />
                                        </div>

                                        <div className="w-50 my-4">
                                            <button onClick={forwordonbillingsec}>Countinue...</button>
                                        </div>
                                    </div>

                                </div> :
                                    step === 3 ? <div className='queryforminput'>
                                        <div className="top">
                                            <p className="fs-5"><IoIosCard className='px-1 fs-3 text-success' />Payment Details..</p>
                                            <p onClick={ClientInfoPage} className="back"><IoArrowBack />Back</p>
                                        </div>

                                        <div>
                                            <div>
                                                <label htmlFor="cardHolderName">card holder name:</label>
                                                <input type="text" id="cardHolderName" placeholder=" name" value={formData.cardHolderName} onChange={handleInputChange} required />
                                            </div>

                                            <div>
                                                <label htmlFor="cardNumber">enter card number:</label>
                                                <input type="number" id="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleInputChange} />
                                            </div>

                                            <div>
                                                <label htmlFor="cardDetails">card details (cvv mm/yyy):</label>
                                                <input type="number" id="cardDetails" name="card-details" placeholder="cvv mm/yyy" pattern="^\d{3,4} \d{2}/\d{4}$" value={formData.cardDetails} onChange={handleInputChange} required />
                                            </div>



                                            {/* -----------------------Billing information box------- */}

                                            <div className="top">
                                                <p className="fs-5"><FaMoneyBillAlt className='px-1 fs-3 text-primary' />Billing Information</p>
                                            </div>


                                            <div className="textareas">
                                                <label htmlFor="address" className="form-label">address</label>
                                                <textarea id="address" name="address" placeholder="type here your address" value={formData.address} onChange={handleInputChange} required />
                                            </div>

                                            <div>
                                                <label htmlFor="country">country:</label>
                                                <input type="text" id="country" placeholder=" name" value={formData.country} onChange={handleInputChange} required />
                                            </div>

                                            <div>
                                                <label htmlFor="state">state:</label>
                                                <input type="text" id="state" placeholder=" name" value={formData.state} onChange={handleInputChange} required />
                                            </div>

                                            <div>
                                                <label htmlFor="city">city:</label>
                                                <input type="text" id="city" placeholder=" name" value={formData.city} onChange={handleInputChange} required />
                                            </div>

                                            <div>
                                                <label htmlFor="postalCode">Postal/Zip_code:</label>
                                                <input type="text" id="postalCode" placeholder=" name" value={formData.postalCode} onChange={handleInputChange} required />
                                            </div>





                                            <div className="my-4">
                                                <button className="btn btn-primary" type="submit" value="submit" >Submit now</button>
                                            </div>
                                        </div>

                                    </div> : null}

                            <div className="rightside">
                                <div>
                                    <div className="top">
                                        <h2>Price Summary</h2>
                                        <div className="menpersonality">
                                            <MdElderlyWoman />
                                            <span>{adt}</span>
                                            <IoMan />
                                            <span>{chd}</span>
                                            <FaChild />
                                            <span>{ift}</span>
                                        </div>
                                    </div>
                                    <div className="pricechart">
                                        <p>Adult x {adt}</p>
                                        {/* <p>$&nbsp; {flight?.fare?.adults * adt}</p> */}
                                        <p> {currency} {convertPrice(flight?.fare?.adults *adt, currency)}</p>
                                    </div>
                                    <div className="pricechart">
                                        <p>Infant x {ift}</p>
                                        <p> {currency} {convertPrice(flight?.fare?.infants * ift, currency)} </p>
                                    </div>
                                    <div className="pricechart">
                                        <p>Child x {chd}</p>
                                        <p> {currency}  {convertPrice(flight?.fare?.children * chd, currency)} </p>
                                    </div>
                                    
                                    <div className="pricechart">
                                        <strong className="text-danger fs-4">Grand Total</strong>
                                        <span className="text-danger fs-4">{currency} {grandTotal.toFixed()}</span>
                                    </div>
                                </div>

                                <div className="formbtn">
                                    {step === 1 ? <button onClick={detailcontactswap} className="countinueapplying">Continue Applying</button> : ""}
                                </div>


                            </div>

                        </div>
                    </form>
                </>

            </Layout>
        )
    }

    export default FlightDetails