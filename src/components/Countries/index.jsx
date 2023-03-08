import axios from "axios"
import { useEffect, useState } from "react"
import CardCountry from "../CardCountry"
import { Container } from "./styles"

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        async function loadCountries(){
            const {data} = await axios.get("https://restcountries.com/v2/all")
            setCountries(data)
        }
        loadCountries()
    },[])

  return (
    <Container>
      {
        countries && countries.map(country => (
          <CardCountry key={country.name} data={country}/>
        ))
      }
    </Container>
  )
}

export default Countries