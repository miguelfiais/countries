import { useCountry } from "../../hooks/CountryContext"
import CardCountry from "../CardCountry"
import { Container } from "./styles"

const Countries = () => {

  const {countries, search} = useCountry()

  const filteredCountries = search.length > 0 
  ? countries.filter(country => country.name.common.toLowerCase().includes(search))
  : [];

  return (
    <Container>
      {
        search.length > 0 ? filteredCountries.map(country => (
          <CardCountry key={country.name.common} data={country}/>
        )) :  countries.length ? countries.map(country => (
          <CardCountry key={country.name.common} data={country}/>
        )) : (
          <h1>Loading...</h1>
        )
      }
    </Container>
  )
}

export default Countries