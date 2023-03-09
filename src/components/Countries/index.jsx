import { useCountry } from "../../hooks/CountryContext"
import CardCountry from "../CardCountry"
import { Container } from "./styles"

const Countries = () => {

  const {countries} = useCountry()

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