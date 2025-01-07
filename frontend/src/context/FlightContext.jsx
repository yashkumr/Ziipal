// FlightContext.js
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const FlightContext = createContext();

export const useFlight = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFlights = async (searchParams) => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/v1/flights/search-flights?${searchParams}`);
            setFlights(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching flights:", error);
            setLoading(false);
        }
    };

    return (
        <FlightContext.Provider value={{ flights, loading, fetchFlights,setFlights }}>
            {children}
        </FlightContext.Provider>
    );
};
