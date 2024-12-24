import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SearchResults from "./pages/SearchResults.jsx"



function App() {
  

  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search-results" element={<SearchResults/>} />
    </Routes>

    </>
  )
}

export default App
