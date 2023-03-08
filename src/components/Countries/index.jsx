import axios from "axios"
import { useEffect, useState } from "react"
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
          <p>{country.name}</p>
        ))
      }
    </Container>
  )
}

export default Countries