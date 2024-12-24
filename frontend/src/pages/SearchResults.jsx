
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
    const location = useLocation();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            const params = new URLSearchParams(location.search);
            console.log(location.search);
            const response = await axios.get(`/api/v1/flights/search-flights?${params.toString()}`);
            // setFlights(response.data);
            console.log(response.data);
        };

        fetchFlights();
    }, [location]);

    return (
        <div>
            <h1>Search Results</h1>
            {flights.map((flight) => (
                <div key={flight.flightNumber}>
                    <h2>{flight.airline}</h2>
                    <p>
                        {flight.departure} to {flight.arrival}
                    </p>
                    <p>
                        {flight.departureTime} - {flight.arrivalTime}
                    </p>
                    <p>Price: ₹{flight.price}</p>
                    <p>Class: {flight.travelClass}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults