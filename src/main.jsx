import React from 'react'
import ReactDOM from 'react-dom/client'
import { CountryProvider } from './hooks/CountryContext'
import Router from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountryProvider>
      <Router/>
    </CountryProvider>
    <GlobalStyles />
  </React.StrictMode>,
)
