import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

const CardCountry = ({data}) => {
  const navigate = useNavigate()
  function goCountry () {
    navigate(`/country/${data.name.common.toLowerCase()}`)
  }
  return (
    <Container onClick={goCountry}>
      <img src={data.flags.png} alt="" />
      <div>
        <h4>{data.name.common}</h4>
        <p>Population: <span>{data.population}</span></p>
        <p>Region: <span>{data.region}</span></p>
        <p>Capital: <span>{data.capital}</span></p>
      </div>
    </Container>
  )
}

export default CardCountry