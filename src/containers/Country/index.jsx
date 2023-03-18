import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi";
import Header from "../../components/Header"
import { BordersContainer, ButtonStyles, Container, InformationContainer, InnerContainer, ListsContainer } from "./styles"

const Country = () => {
    const navigate = useNavigate()
    const {name} = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        async function getCountry () {
            await axios.get(`https://restcountries.com/v3.1/name/${name}`).then(response => {
                setCountry(response.data[0]) 
            })
        }
        getCountry()
    }, [name])

  function goCountry (country) {
    navigate(`/country/${country.toLowerCase()}`)
  }

  return (
    <>
        <Header />
        <Container>
            <ButtonStyles onClick={() => navigate('/')}>
                <HiArrowNarrowLeft />
                Back
            </ButtonStyles>
            { country ? (
                <InnerContainer>
                    <img src={country.flags.png} alt="country-flag" />
                    <InformationContainer>
                        <h3>{country.name.common}</h3>
                        <ListsContainer>
                            <ul className="first-list">
                                <li>Native Name: <span>{country.altSpellings[1]}</span></li>
                                <li>Population: <span>{country.population}</span></li>
                                <li>Region: <span>{country.region}</span></li>
                                <li>Sub Region: <span>{country.subregion}</span></li>
                                <li>Capital: <span>{country.capital}</span></li>
                            </ul>
                            <ul className="second-list">
                                <li>Top Level Domain: <span>{country.tld}</span></li>
                                <li>Currencies:</li>
                                <li>Languages:</li>
                            </ul>
                        </ListsContainer>
                        <BordersContainer>
                            {
                                country.borders && (
                                    <>
                                        <h4>Border Countries:</h4>
                                        <div>
                                        {
                                            country.borders.map(border => (
                                                <ButtonStyles key={border} onClick={() => goCountry(border)}>{border}</ButtonStyles>
                                            ))
                                        }
                                        </div>
                                    </>
                                ) 
                            }
                        </BordersContainer>
                    </InformationContainer>
                </InnerContainer>
            ) : <h3>Loading...</h3>}
        </Container>
    </>
  )
}

export default Country