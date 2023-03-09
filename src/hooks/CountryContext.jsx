import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"

const CountryContext = createContext({})

export const CountryProvider = ({ children }) => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
    async function loadCountries(){
        await axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data))
    }
    loadCountries()
    },[])

  return (
    <CountryContext.Provider value={{countries, setCountries}}>
        {children}
    </CountryContext.Provider>
  )
}

export const useCountry = () => {
  const context = useContext(CountryContext)

  if (!context) {
    throw new Error('useCountry must be used with Countrycontext')
  }
  return context
}