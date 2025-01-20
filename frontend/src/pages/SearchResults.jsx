
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout.jsx";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { useFlight } from "../context/FlightContext.jsx";
import { CurrencyContext } from "../context/CurrencyContext.jsx";
import { LiaPlaneDepartureSolid } from "react-icons/lia";

const SearchResults = () => {
    const { currency, convertPrice } = useContext(CurrencyContext);

    const location = useLocation();
    const { flights, loading, fetchFlights, errorCode } = useFlight();
    const [filteredFlights, setFilteredFlights] = useState(flights); // Store filtered data
    const [filters, setFilters] = useState({ priceRange: [0, 0], airline: "", stops: null, selectedTimeSlot: "" });
    const [minMaxPrice, setMinMaxPrice] = useState({
        minPrice: 0,
        maxPrice: 0,
    });
    const [showAll, setShowAll] = useState(false);
    const [tripType, setTripType] = useState('');

    const [flightDetailShow, setFlightDetailShow] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const trpType = params.get('trpType');
        setTripType(trpType);


        fetchFlights(params.toString());
    }, [location]);




    // Update the default price range based on flights data
    useEffect(() => {
        if (flights.length > 0) {
            const prices = flights.map((flight) => convertPrice(flight?.fare?.adults, currency)).filter(Boolean);
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);

            setMinMaxPrice({ minPrice, maxPrice });

            setFilters((prevFilters) => ({
                ...prevFilters,
                priceRange: [minPrice, maxPrice],
            }));

            setFilteredFlights(flights); // Initialize filtered flights
        }
    }, [flights]);

    useEffect(() => {
        const handleFilter = () => {
            let updatedFlights = [...flights];

            // Filter by price range
            updatedFlights = updatedFlights.filter(
                (flight) =>
                    convertPrice(flight?.fare?.adults, currency) >= filters.priceRange[0] &&
                    convertPrice(flight?.fare?.adults, currency) <= filters.priceRange[1]
            );

            // Filter by airline
            if (filters.airline) {
                updatedFlights = updatedFlights.filter((flight) =>
                    flight?.airlinesName?.name?.toLowerCase().includes(filters.airline.toLowerCase())
                );
            }

            // Filter by stops
            if (filters.stops !== null) {
                updatedFlights = updatedFlights.filter((flight) => {
                    const stopCount = flight?.route ? Object.keys(flight.route).length - 1 : 0;
                    if (filters.stops >= 2) {
                        return stopCount >= 2; // For flights with 2 or more stops
                    }
                    return stopCount === filters.stops; // For specific stop counts
                });
            }

            // Filter by time slot
            if (filters.selectedTimeSlot) {
                updatedFlights = updatedFlights.filter((flight) => {
                    const firstRoute = Object.values(flight?.route)?.[0];
                    if (!firstRoute) return false;
                    const departureHour = new Date(firstRoute.local_departure).getHours();

                    switch (filters.selectedTimeSlot) {
                        case "Morning":
                            return departureHour >= 6 && departureHour < 12;
                        case "Afternoon":
                            return departureHour >= 12 && departureHour < 18;
                        case "Evening":
                            return departureHour >= 18 && departureHour < 24;
                        default:
                            return true;
                    }
                });
            }

            setFilteredFlights(updatedFlights);
        };

        handleFilter();
    }, [flights, filters]);

    const getTimeAndDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return {
            time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            date: date.toLocaleDateString(),
        };
    };

    // Divide the data
    const halfIndex = Math.ceil(filteredFlights.length / 4);
    const displayedFlights = showAll ? filteredFlights : filteredFlights.slice(0, halfIndex);

    const handleMinChange = (e) => {
        const newMin = parseInt(e.target.value, 10);
        if (newMin <= filters.priceRange[1]) {
            setFilters({ ...filters, priceRange: [newMin, filters.priceRange[1]] });
        }
    };

    const handleMaxChange = (e) => {
        const newMax = parseInt(e.target.value, 10);
        if (newMax >= filters.priceRange[0]) {
            setFilters({ ...filters, priceRange: [filters.priceRange[0], newMax] });
        }
    };

    // if (minMaxPrice.minPrice === minMaxPrice.maxPrice) {
    //     return <div className="loading-popup d-flex justify-content-center align-items-center bg-gray" style={{ height: "100vh" }}>
    //         <div className="d-flex justify-content-center align-items-center ">
    //             <div className="spinner-border " role="status">
    //                 <span className="">Loading...</span>
    //             </div>
    //         </div>
    //     </div>;

    // }

    // Clear filters
    const clearFilters = () => {
        setFilters({
            airline: "", stops: null, selectedTimeSlot: "",
            priceRange: [minMaxPrice.minPrice, minMaxPrice.maxPrice],
        });

        setFilteredFlights(flights);
    };

    const showFlightDetails = (flight) => {
        setSelectedFlight(flight);
        setFlightDetailShow(true);
    };

    const closeFlightDetails = () => {
        setFlightDetailShow(false);
        setSelectedFlight(null);
    };






    // if (!flights || !flights.route) return <p>No flight data available</p>;

    // const departureFlights = Object.values(flights.route).filter(flight => flight.return === 0).length;
    // console.log(departureFlights.length);
    // const returnFlights = Object.values(flights.route).filter(flight => flight.return === 1);


    useEffect(() => {

        let roundFlights = [...flights]

        roundFlights = roundFlights.filter((flight) => {

            flight.outboundFlights = Object.values(flight?.route).filter(flight => flight.return === 0);



            flight.inboundFlights = Object.values(flight?.route).filter(flight => flight.return === 1);

            return flight.outboundFlights >= 0 && flight.inboundFlights >= 0;
        });
        setFilteredFlights(roundFlights);

    }, [flights]);

    return (
        <>
            <Layout title={" ZIIPL | Search Results"}>


                <div>

                    {errorCode ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                            <p style={{ color: "red", fontSize: "18px" }}>{errorCode}</p>
                        </div>
                    ) : loading ? (
                        <div className="loading-popup d-flex justify-content-center align-items-center bg-gray" style={{ height: "100vh" }}>
                            <div className="d-flex justify-content-center align-items-center ">
                                <div className="spinner-border " role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="filtercontainer">
                            <div className="sidefilterbar">
                                <div className="text-center">
                                    <h4 style={{ textAlign: 'center', padding: '1px', fontWeight: 500 }}>FILTER</h4>
                                    <button
                                        className=" btn btn-warning  border-0 text-dark shadow text-center"
                                        onClick={clearFilters}
                                    >
                                        Clear All Filters
                                    </button>
                                    <hr />
                                </div>


                                <div className="d-flex">
                                    <div>
                                        <p className="fw-bold text-dark"> Selects stops:</p>
                                    </div>

                                    <div>

                                        <select
                                            onChange={(e) =>
                                                setFilters((prevFilters) => ({
                                                    ...prevFilters,
                                                    stops: e.target.value === "" ? null : Number(e.target.value),
                                                }))
                                            }
                                        >
                                            <option value="">All</option>
                                            <option value="0">Non-stop</option>
                                            <option value="1">1 Stop</option>
                                            <option value="2">2+ Stops</option>

                                        </select>
                                    </div>





                                </div>
                                <div className="pricerange">


                                    <div style={{ width: "250px", margin: "20px auto" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <span className="fs-6 fw-normal"> {currency}  {filters.priceRange[0]}</span>
                                            <span className="fs-6 fw-normal"> {currency}  {filters.priceRange[1]}</span>
                                        </div>
                                        <div style={{ position: "relative", height: "30px" }}>
                                            {/* Track */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "20px",
                                                    left: "0",
                                                    right: "0",
                                                    height: "6px",
                                                    background: "#ddd",
                                                    borderRadius: "5px",

                                                }}
                                            />
                                            {/* Range Highlight */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "20px",
                                                    left: `${((filters.priceRange[0] - minMaxPrice.minPrice) / (minMaxPrice.maxPrice - minMaxPrice.minPrice)) * 100}%`,
                                                    right: `${100 - ((filters.priceRange[1] - minMaxPrice.minPrice) / (minMaxPrice.maxPrice - minMaxPrice.minPrice)) * 100}%`,
                                                    height: "6px",
                                                    background: "#007aff",
                                                    borderRadius: "5px",
                                                    border: "1px solid red solid",
                                                }}
                                            />
                                            {/* Minimum slider */}
                                            <input
                                                type="range"
                                                min={minMaxPrice.minPrice}
                                                max={minMaxPrice.maxPrice}
                                                value={filters.priceRange[0]}
                                                onChange={handleMinChange}
                                                style={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    zIndex: "2",
                                                    width: "100%",
                                                    pointerEvents: "auto",
                                                    appearance: "none",
                                                }}
                                            />
                                            {/* Maximum slider */}
                                            <input
                                                type="range"
                                                min={minMaxPrice.minPrice}
                                                max={minMaxPrice.maxPrice}
                                                value={filters.priceRange[1]}
                                                onChange={handleMaxChange}
                                                style={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    zIndex: "2",
                                                    width: "100%",
                                                    height: "16px",
                                                    borderRadius: "11px",
                                                    pointerEvents: "auto",
                                                    appearance: "none",
                                                    backgroundImage: 'linear-gradient(135deg, #92FFC0 10%, #002661 100%)',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* 
                                <div className="d-flex gap-1">
                                    <p>Min:${filters.priceRange[0]}</p>
                                    <p>Max:${filters.priceRange[1]
                                    }</p>
                                </div> */}

                                </div>

                                <div className="time-filters">
                                    {/* <h3 className="fs-4">Departure Time {flight?.cityFrom} </h3> */}
                                    <h3 className="fs-4">Departure Time </h3>
                                    <div className="">
                                        <button className="m-1 p-1" onClick={() => setFilters({ ...filters, selectedTimeSlot: "Morning" })}>
                                            <p> Morning</p>   <p>6 AM - 12 PM</p>
                                        </button>
                                        <button className="m-1 p-1" onClick={() => setFilters({ ...filters, selectedTimeSlot: "Afternoon" })}>
                                            <p> Afternoon </p>  <p>12 PM - 6 PM</p>
                                        </button>
                                        <button className="m-1 p-1" onClick={() => setFilters({ ...filters, selectedTimeSlot: "Evening" })}>
                                            <p> Evening</p> <p>6 PM - 12 AM </p>
                                        </button>
                                        <button className="m-1 p-1" onClick={() => setFilters({ ...filters, selectedTimeSlot: "" })}>
                                            <p>All Times </p>
                                        </button>
                                    </div>
                                </div>




                                <div className="checkairlines">
                                    <h3 className="fs-4">Airlines:</h3>
                                    <ul>
                                        {displayedFlights.map((flight, index) => (
                                            <li key={index}>
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        value={flight?.airlinesName?.name}
                                                        onChange={(e) =>
                                                            setFilters({ ...filters, airline: e.target.value })
                                                        }
                                                        className="form-check-input" id="exampleCheck1"
                                                    />
                                                    <label className="form-check-label" for="exampleCheck1">
                                                        <span
                                                            style={{ fontSize: "12px" }}
                                                            className="text-dark float-left"
                                                        >
                                                            {flight?.airlinesName?.name}
                                                        </span>
                                                        <span
                                                            style={{ fontSize: "12px" }}
                                                            className="float-right text-dark"
                                                        >
                                                            {currency}  {convertPrice(flight?.fare?.adults, currency)}
                                                        </span>
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-warning" onClick={() => setShowAll(!showAll)}>
                                        {showAll ? "Show Less" : "Show All"}
                                    </button>
                                </div>
                                {/* <button
                                className=" btn btn-warning  border-0 text-dark shadow text-center"
                                onClick={clearFilters}
                            >
                                Clear All Filters
                            </button> */}
                            </div>
                            {tripType === 'roundtrip' ? (
                                <>
                                    {flightDetailShow && selectedFlight && (

                                        <div className='flightdetailpopup'>

                                            <div className='bg-secondary w-75 d-flex justify-content-center align-items-center'>


                                                <div className='popupparent'>


                                                    <div className='depart'>
                                                        <p className='text-secondary fw-bold'>ITINERARY DETAILS</p>
                                                        <h3><LiaPlaneDepartureSolid className='text-primary' /><span className='fs-4 px-2 text-warning'>Departure:</span> {selectedFlight.cityCodeFrom}</h3>
                                                    </div>

                                                    {selectedFlight?.outboundFlights && (
                                                        <div>
                                                            {(() => {
                                                                const routeArray = Object.values(selectedFlight.outboundFlights);

                                                                const chunkArray = (array, chunkSize) => {
                                                                    if (chunkSize <= 1) {
                                                                        throw new Error("Chunk size must be greater than 1");
                                                                    }

                                                                    const chunks = [];
                                                                    let i = 0;

                                                                    while (i < array.length) {
                                                                        let chunk = array.slice(i, i + chunkSize);

                                                                        if (i + chunkSize > array.length) {
                                                                            const lastElement = chunk[chunk.length - 1];
                                                                            while (chunk.length < chunkSize) {
                                                                                chunk.push(lastElement);
                                                                            }
                                                                        }

                                                                        chunks.push(chunk);

                                                                        i += chunkSize - 1;
                                                                    }

                                                                    return chunks;
                                                                };

                                                                const chunkRoundData = chunkArray(routeArray, 2);
                                                                console.log(chunkRoundData);

                                                                return (
                                                                    <>
                                                                        {chunkRoundData.map((routeData, index) => (
                                                                            <div key={index} className="d-flex justify-content-evenly flex-wrap">
                                                                                {routeData.map((route, innerIndex) => {
                                                                                    // Track the previously displayed layover duration
                                                                                    const showLayover =
                                                                                        innerIndex > 0 &&
                                                                                        route?.duration_layover !== routeData[innerIndex - 1]?.duration_layover;

                                                                                    return (
                                                                                        <>
                                                                                            <div>
                                                                                                {innerIndex >= 0 && innerIndex < 1 && (
                                                                                                    <div>
                                                                                                        <p className="m-0">{route?.airlineName}</p>
                                                                                                        <p className="m-0">
                                                                                                            {route?.airline} - {route?.flight_no}
                                                                                                        </p>
                                                                                                        <p className="m-0">Operated By {route?.airline}</p>
                                                                                                    </div>
                                                                                                )}
                                                                                            </div>

                                                                                            <div>

                                                                                                <div className="m-0">
                                                                                                    {index === chunkRoundData.length - 1 && innerIndex === routeData.length - 1
                                                                                                        ? <> <div> <p> {route?.cityTo} ({route?.cityCodeTo})</p></div> <div>


                                                                                                            {route && (() => {
                                                                                                                const departure = getTimeAndDate(route?.local_arrival);
                                                                                                                return (
                                                                                                                    <div className="d-flex">
                                                                                                                        <p className="">
                                                                                                                            {departure.time}, <span>{departure.date}</span>
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                );
                                                                                                            })()}
                                                                                                        </div>  </>
                                                                                                        // Check if it's the last index
                                                                                                        : <> <div> <p> {route?.cityFrom} ({route?.cityCodeFrom}) </p> <div>


                                                                                                            {route && (() => {
                                                                                                                const departure = getTimeAndDate(route?.local_departure);
                                                                                                                return (
                                                                                                                    <div className="d-flex">
                                                                                                                        <p className="">
                                                                                                                            {departure.time}, <span>{departure.date}</span>
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                );
                                                                                                            })()}
                                                                                                        </div> </div>  </>}
                                                                                                </div>


                                                                                                <div className="d-flex justify-content-evenly flex-column">


                                                                                                    <div className="text-center">
                                                                                                        {index >= 0 && index < chunkRoundData.length - 1 && showLayover && (
                                                                                                            <div>
                                                                                                                <p className="m-1 p-1">
                                                                                                                    Layover: {route?.duration_layover}
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        )}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    );
                                                                                })}
                                                                            </div>
                                                                        ))}
                                                                    </>
                                                                );
                                                            })()}
                                                        </div>
                                                    )}



                                                    <div className='depart'>
                                                        <h3><LiaPlaneDepartureSolid className='text-primary' /><span className='fs-4 px-2 text-warning'>Return</span> BOM | Chhatrapati Shivaji, Mumbai, India</h3>
                                                    </div>

                                                    {selectedFlight?.inboundFlights && (
                                                        <div>
                                                            {(() => {
                                                                const routeArray = Object.values(selectedFlight.inboundFlights);

                                                                const chunkArray = (array, chunkSize) => {
                                                                    if (chunkSize <= 1) {
                                                                        throw new Error("Chunk size must be greater than 1");
                                                                    }

                                                                    const chunks = [];
                                                                    let i = 0;

                                                                    while (i < array.length) {
                                                                        let chunk = array.slice(i, i + chunkSize);

                                                                        if (i + chunkSize > array.length) {
                                                                            const lastElement = chunk[chunk.length - 1];
                                                                            while (chunk.length < chunkSize) {
                                                                                chunk.push(lastElement);
                                                                            }
                                                                        }

                                                                        chunks.push(chunk);

                                                                        i += chunkSize - 1;
                                                                    }

                                                                    return chunks;
                                                                };

                                                                const chunkRoundData = chunkArray(routeArray, 2);
                                                                console.log(chunkRoundData);

                                                                return (
                                                                    <>
                                                                        {chunkRoundData.map((routeData, index) => (
                                                                            <div key={index} className="d-flex justify-content-evenly flex-wrap">
                                                                                {routeData.map((route, innerIndex) => {
                                                                                    // Track the previously displayed layover duration
                                                                                    const showLayover =
                                                                                        innerIndex > 0 &&
                                                                                        route?.duration_layover !== routeData[innerIndex - 1]?.duration_layover;

                                                                                    return (
                                                                                        <>
                                                                                            <div>
                                                                                                {innerIndex >= 0 && innerIndex < 1 && (
                                                                                                    <div>
                                                                                                        <p className="m-0">{route?.airlineName}</p>
                                                                                                        <p className="m-0">
                                                                                                            {route?.airline} - {route?.flight_no}
                                                                                                        </p>
                                                                                                        <p className="m-0">Operated By {route?.airline}</p>
                                                                                                    </div>
                                                                                                )}
                                                                                            </div>

                                                                                            <div>

                                                                                                <div className="m-0">
                                                                                                    {index === chunkRoundData.length - 1 && innerIndex === routeData.length - 1
                                                                                                        ? <> <div> <p> {route?.cityTo} ({route?.cityCodeTo})</p></div> <div>


                                                                                                            {route && (() => {
                                                                                                                const departure = getTimeAndDate(route?.local_arrival);
                                                                                                                return (
                                                                                                                    <div className="d-flex">
                                                                                                                        <p className="">
                                                                                                                            {departure.time}, <span>{departure.date}</span>
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                );
                                                                                                            })()}
                                                                                                        </div>  </>
                                                                                                        // Check if it's the last index
                                                                                                        : <> <div> <p> {route?.cityFrom} ({route?.cityCodeFrom}) </p> <div>


                                                                                                            {route && (() => {
                                                                                                                const departure = getTimeAndDate(route?.local_departure);
                                                                                                                return (
                                                                                                                    <div className="d-flex">
                                                                                                                        <p className="">
                                                                                                                            {departure.time}, <span>{departure.date}</span>
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                );
                                                                                                            })()}
                                                                                                        </div> </div>  </>}
                                                                                                </div>


                                                                                                <div className="d-flex justify-content-center">


                                                                                                    <div className="text-center">
                                                                                                        {index >= 0 && index < chunkRoundData.length - 1 && showLayover && (
                                                                                                            <div>
                                                                                                                <p className="m-1 p-1">
                                                                                                                    Layover: {route?.duration_layover}
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        )}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    );
                                                                                })}
                                                                            </div>
                                                                        ))}
                                                                    </>
                                                                );
                                                            })()}
                                                        </div>
                                                    )}



                                                    <div className='border-top w-100 py-2 d-flex justify-content-end align-items-end'>
                                                        <button className='px-3 py-1 bg-danger rounded text-white ' onClick={closeFlightDetails}>close</button>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>

                                    )}

                                    <div className="d-flex flex-column">


                                        {filteredFlights && filteredFlights.length >= 0 ? (
                                            filteredFlights.map((flight) => (
                                                <div className="bookings" key={flight.id}>
                                                    <div className='roundtripdetails' >
                                                        <div className='roundtripdetailsec'>
                                                            <div className='roundtripflightdetailleft'>
                                                                <div className='roundtripdeparturearrival' >

                                                                    <div className='roundriplogono'>
                                                                        <span><LiaPlaneDepartureSolid className='fs-4 mb-0' /></span>
                                                                        <p className="mb-0">{flight?.airlines[0]}-{flight?.flightarray?.flight_no[0]}</p>

                                                                    </div>
                                                                    <p className="m-0">{flight?.cityCodeFrom}</p>
                                                                    {/* <p>02:20 <span>Wed, Jan 22</span></p> */}
                                                                    {Object.values(flight?.route)?.[0] && (() => {
                                                                        const firstRoute = Object.values(flight?.route)?.[0];
                                                                        const departure = getTimeAndDate(firstRoute?.local_departure);
                                                                        return (
                                                                            <div className="d-flex">
                                                                                <p className="">{departure.time}

                                                                                    <span>{departure.date}</span> </p>
                                                                            </div>
                                                                        );
                                                                    })()}
                                                                    <div>
                                                                        <p>{flight.outboundFlights.length} stops</p>
                                                                        <hr style={{ marginTop: "-10px" }} />
                                                                    </div>
                                                                    <p>{flight?.cityCodeTo}</p>
                                                                    {/* <p>04:50 <span>Wed, Jan 22</span></p> */}
                                                                    <p>
                                                                        {Object.values(flight?.route)?.[Object.values(flight?.route).length - 1] && (() => {
                                                                            const lastRoute = Object.values(flight?.route)?.[Object.values(flight?.route).length - 1];
                                                                            const arrival = getTimeAndDate(lastRoute?.local_arrival);
                                                                            return (
                                                                                <div>
                                                                                    <p>{arrival.time} <span> {arrival.date} </span> </p>

                                                                                </div>
                                                                            );
                                                                        })()}
                                                                    </p>

                                                                </div>

                                                                <div className='roundtripdeparturearrival'>
                                                                    <div className='roundriplogono'>
                                                                        <span><LiaPlaneDepartureSolid className='fs-4' /></span>
                                                                        <p>1X-1146</p>
                                                                    </div>
                                                                    <p className="m-0">{flight.inboundFlights[0].cityCodeFrom}</p>

                                                                    <p>
                                                                        {Object.values(flight.inboundFlights)?.[0] && (() => {
                                                                            const firstRoute = Object.values(flight?.inboundFlights)?.[0];
                                                                            const departure = getTimeAndDate(firstRoute?.local_departure);
                                                                            return (
                                                                                <div className="d-flex">
                                                                                    <p className="">{departure.time}

                                                                                        <span>{departure.date}</span>
                                                                                    </p>

                                                                                </div>
                                                                            );
                                                                        })()}
                                                                    </p>
                                                                    {/* <p>02:20 <span >Wed, Jan 22</span></p> */}
                                                                    <div>
                                                                        <p> {flight.inboundFlights.length} stops</p>
                                                                        <hr style={{ marginTop: "-10px" }} />
                                                                    </div>
                                                                    <p>{flight.inboundFlights[flight.inboundFlights.length - 1].cityCodeTo}</p>

                                                                    {Object.values(flight?.inboundFlights)?.[Object.values(flight?.inboundFlights).length - 1] && (() => {
                                                                        const lastRoute = Object.values(flight?.inboundFlights)?.[Object.values(flight?.inboundFlights).length - 1];
                                                                        const arrival = getTimeAndDate(lastRoute?.local_arrival);
                                                                        return (
                                                                            <div>
                                                                                <p>{arrival.time}  <span>{arrival.date} </span> </p>

                                                                            </div>
                                                                        );
                                                                    })()}
                                                                    {/* <p>04:50 <span>Wed, Jan 22</span></p> */}
                                                                </div>

                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <p onClick={() => showFlightDetails(flight)} className="book-trip m-0 p-0"><LiaPlaneDepartureSolid className='fs-4' /> Flight's Details</p>
                                                                </div>
                                                            </div>



                                                            <div className='roundtripflightdetailright'>
                                                                <h5 className='fw-bold fs-3'>{currency} {convertPrice(flight?.fare?.adults, currency)}</h5>
                                                                <p>per person</p>
                                                                <Link to={`/flight-details/${flight.id}`} state={{ flight, location }} className="book-trip">
                                                                    Book Now
                                                                </Link>
                                                                <p>{flight?.availability?.seats} seat left</p>

                                                            </div>
                                                            <div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className=" d-flex justify-content-center align-items-center bg-gray" style={{ height: "100vh" }}>
                                                <h3 className="text-center fw-bold text-warning">Sorry! There is no flight available on this Route...</h3>
                                            </div>
                                        )}

                                    </div>



                                </>
                            )
                                : (
                                    <>
                                        <div>
                                            {filteredFlights && filteredFlights.length > 0 ? (
                                                filteredFlights.map((flight) => (
                                                    <div className="bookings" key={flight.id}>
                                                        <p className="offer">
                                                            <span className="deal">Deal</span> &nbsp;Avail Upto 20% OFF on using RBL Bank Credit Cards. Use Code - RBLFEST
                                                        </p>
                                                        <hr />
                                                        <div className="booking_details">
                                                            <div className="flight1">
                                                                <div className="flightdetail">
                                                                    <div className="fs-2">
                                                                        <RiFlightTakeoffFill />
                                                                    </div>
                                                                    <div>
                                                                        <h4>{flight?.airlinesName?.name}</h4>
                                                                        <p>{flight?.airlines[0]}-{flight?.flightarray?.flight_no[0]}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className="weight text-danger">{flight?.availability?.seats} Seats Left!</p>
                                                                </div>
                                                            </div>
                                                            <div className="flight2">
                                                                <h4>{flight?.cityFrom}({flight?.cityCodeFrom})</h4>
                                                                {Object.values(flight?.route)?.[0] && (() => {
                                                                    const firstRoute = Object.values(flight?.route)?.[0];
                                                                    const departure = getTimeAndDate(firstRoute?.local_departure);
                                                                    return (
                                                                        <div>
                                                                            <h2>{departure.time}</h2>
                                                                            <p>{departure.date}</p>
                                                                        </div>
                                                                    );
                                                                })()}
                                                                <p className="fs-6">Indra Gandhi (TD-1)</p>
                                                            </div>
                                                            <div className="flight3">
                                                                <p>
                                                                    {Math.floor(
                                                                        Object.values(flight?.route || {}).reduce((sum, f) => sum + (f.durationInMinutes || 0), 0) / 60
                                                                    )}h : {Object.values(flight?.route || {}).reduce((sum, f) => sum + (f.durationInMinutes || 0), 0) % 60}m
                                                                </p>
                                                                <hr />
                                                                <p>
                                                                    <strong>
                                                                        {flight?.route && Object.keys(flight.route).length === 1
                                                                            ? "Non Stops"
                                                                            : Object.keys(flight.route).length - 1}
                                                                    </strong>

                                                                </p>
                                                            </div>
                                                            <div className="flight4">
                                                                <h4>{flight?.cityTo}({flight?.cityCodeTo})</h4>
                                                                {Object.values(flight?.route)?.[Object.values(flight?.route).length - 1] && (() => {
                                                                    const lastRoute = Object.values(flight?.route)?.[Object.values(flight?.route).length - 1];
                                                                    const arrival = getTimeAndDate(lastRoute?.local_arrival);
                                                                    return (
                                                                        <div>
                                                                            <h2>{arrival.time}</h2>
                                                                            <p>{arrival.date}</p>
                                                                        </div>
                                                                    );
                                                                })()}

                                                                <p>Chattrpati Shivaji (T-1)</p>
                                                            </div>
                                                            <div className="flight5">
                                                                <p className="text-center m-0 p-0">
                                                                    {currency} {convertPrice(flight?.fare?.adults, currency)}
                                                                </p>

                                                                <Link to={`/flight-details/${flight.id}`} state={{ flight, location }} className="book-trip">
                                                                    Book Now
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className=" d-flex justify-content-center align-items-center bg-gray" style={{ height: "100vh" }}>
                                                    <h3 className="text-center fw-bold text-warning">Sorry! There is no flight available on this Route...</h3>
                                                </div>
                                            )}

                                        </div>
                                    </>

                                )
                            }



                        </div>
                    )}
                </div>

                {/* <div>
               {tripType === 'roundtrip' && (
              <p>
                <strong>Return Date:</strong> {flight.rtnDate}
              </p>
            )}
               </div> */}




            </Layout>
        </>


    )
}

export default SearchResults