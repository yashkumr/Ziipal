
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout.jsx";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { useFlight } from "../context/FlightContext.jsx";

const SearchResults = () => {
    const location = useLocation();
    const { flights, loading, fetchFlights } = useFlight();

    const [filteredFlights, setFilteredFlights] = useState(flights); // Store filtered data
    const [filters, setFilters] = useState({ priceRange: [0, 6000], airline: "", stops: null, selectedTimeSlot: "" });
    const [showAll, setShowAll] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        fetchFlights(params.toString());
    }, [location]);

    useEffect(() => {
        const handleFilter = () => {
            let updatedFlights = [...flights];

            // Filter by price range
            updatedFlights = updatedFlights.filter(
                (flight) =>
                    flight?.fare?.adults >= filters.priceRange[0] &&
                    flight?.fare?.adults <= filters.priceRange[1]
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
    const halfIndex = Math.ceil(flights.length / 4);
    const displayedFlights = showAll ? flights : flights.slice(0, halfIndex);

    // const handleBookNow = (flightId) => {
    //     navigate(`/single-flight/${flightId}`);
    // };


    return (
        <>
            <Layout   title={" ZIIPL | Search Results"}>
                {loading ? (
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
                            <div>
                                <h4 style={{ textAlign: 'center', padding: '1px', fontWeight: 500 }}>FILTER</h4>
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
                                        <option value="1">Non-stop</option>
                                        <option value="2">1 Stop</option>
                                        <option value="3">2+ Stops</option>

                                    </select>
                                </div>
                                {/* {filteredFlights.map((r, index) => (

                                    <>
                                        <p>
                                            <strong>
                                                {r?.route ? JSON.stringify(Object.keys(r.route).length) : "Route is undefined"}
                                            </strong> stops
                                        </p>

                                    </>

                                ))} */}




                            </div>
                            <div className="pricerange">


                                <input
                                    type="range"
                                    min={10}
                                    max={5000}
                                    value={filters.priceRange[10]}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            priceRange: [parseInt(e.target.value, 10), filters.priceRange[1]],
                                        })
                                    }
                                />
                                <p>up to: {filters.priceRange[1]}</p>

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
                                                        ${flight?.fare?.adults}
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => setShowAll(!showAll)}>
                                    {showAll ? "Show Less" : "Show All"}
                                </button>
                            </div>
                            <button
                                className=" btn btn-warning  border-0 text-dark shadow text-center"
                                onClick={() => window.location.reload()}
                            >
                                Clear All Filters
                            </button>
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
                                                        {flight?.route ? JSON.stringify(Object.keys(flight.route).length) : "Route is undefined"}
                                                    </strong> stops
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
                                                <p className="text-center m-0 p-0">${flight?.fare?.adults}</p>
                                                <Link to={`/flight-details/${flight.id}`} state={{ flight }} className="btn btn-primary">
                                                    Book Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className=" d-flex justify-content-center align-items-center bg-gray" style={{ height: "100vh" }}>
                                    <h3 className="text-center fw-bold text-warning">Sorry! There is no flight available on this Filter Range...</h3>
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