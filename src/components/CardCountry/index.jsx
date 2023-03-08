import React from 'react'
import { Container } from './styles'

const CardCountry = ({data}) => {
  return (
    <Container>
      <img src={data.flags.png} alt="" />
      <div>
        <h4>{data.name}</h4>
        <p>Population: <span>{data.population}</span></p>
        <p>Region: <span>{data.region}</span></p>
        <p>Capial: <span>{data.capital}</span></p>
      </div>
    </Container>
  )
}

export default CardCountry