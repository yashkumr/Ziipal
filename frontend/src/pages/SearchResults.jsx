
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout.jsx";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { useFlight } from "../context/FlightContext.jsx";
import { CurrencyContext } from "../context/CurrencyContext.jsx";

const SearchResults = () => {
    const { currency, convertPrice } = useContext(CurrencyContext);

    const location = useLocation();
    const { flights, loading, fetchFlights,errorCode } = useFlight();
    const [filteredFlights, setFilteredFlights] = useState(flights); // Store filtered data
    const [filters, setFilters] = useState({ priceRange: [0, 0], airline: "", stops: null, selectedTimeSlot: "" });
    const [minMaxPrice, setMinMaxPrice] = useState({
        minPrice: 0,
        maxPrice: 0,
    });
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

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

    console.log(filteredFlights);

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
            priceRange: [minMaxPrice.minPrice, minMaxPrice.maxPrice], // Reset price range to default
        });

        setFilteredFlights(flights); // Reset to all flights
    };


    return (
        <>
            <Layout title={" ZIIPL | Search Results"}>


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

                                                <Link to={`/flight-details/${flight.id}`} state={{ flight, location }} className="btn btn-primary">
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
                    </div>
                )}




            </Layout>
        </>


    )
}

export default SearchResults