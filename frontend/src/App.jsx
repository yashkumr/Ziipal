import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SearchResults from "./pages/SearchResults.jsx"
import FlightDetails from "./pages/FlightDetails.jsx"



function App() {
  

  return (
    <>
    <Toaster className="mt-5"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight-details/:id" element={<FlightDetails />} />
      <Route path="/search-results" element={<SearchResults  />} />

    </Routes>

    </>
  )
}

export default App
