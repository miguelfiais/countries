import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"

const CountryContext = createContext({})

export const CountryProvider = ({ children }) => {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
    async function loadCountries(){
        await axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data))
    }
    loadCountries()
    },[]) 

    async function filteredRegion(region){
      if(region){
        await axios.get(`https://restcountries.com/v3.1/region/${region}`).then(response => setCountries(response.data))
      } else {
        await axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data))
      }
    }
    
  return (
    <CountryContext.Provider value={{countries, setCountries, search, setSearch, filteredRegion}}>
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