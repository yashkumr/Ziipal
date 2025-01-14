import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Auth.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FlightProvider } from './context/FlightContext.jsx'
import { CurrencyProvider } from './context/CurrencyContext.jsx'


createRoot(document.getElementById('root')).render(

<AuthProvider>
  <CurrencyProvider>
    
      <FlightProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FlightProvider>
  </CurrencyProvider>
  </AuthProvider>
)
