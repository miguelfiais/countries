import axios from "axios"
import { useEffect, useState } from "react"
import CardCountry from "../CardCountry"
import { Container } from "./styles"

const Countries = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function loadCountries(){
      await axios.get("https://restcountries.com/v3.1/all").then(response => setCountries(response.data))
    }
  loadCountries()
  },[])

  return (
    <Container>
      {
        countries.length ? countries.map(country => (
          <CardCountry key={country.name.common} data={country}/>
        )) : (
          <h1>Loading...</h1>
        )
      }
    </Container>
  )
}

export default Countries