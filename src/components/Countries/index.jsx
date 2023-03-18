import { useCountry } from "../../hooks/CountryContext"
import CardCountry from "../CardCountry"
import { Container } from "./styles"

const Countries = () => {

  const {countries, search, countriesRegion} = useCountry()

  let filteredCountries
  countriesRegion.length > 0 ? 
  filteredCountries = search.length > 0 
  && countriesRegion.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  : filteredCountries = search.length > 0 
  && countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
  

  return (
    <Container>
      {
        search.length > 0 ? filteredCountries.map(country => (
          <CardCountry key={country.name.common} data={country}/>
        )) :  countriesRegion.length ? countriesRegion.map(country => (
          <CardCountry key={country.name.common} data={country}/>
        )) : countries.length ? countries.map(country => (
          <CardCountry key={country.name.common} data={country}/>
        )) : (
          <h1>Loading...</h1>
        )
      }
    </Container>
  )
}

export default Countries