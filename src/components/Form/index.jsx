import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useCountry } from '../../hooks/CountryContext';
import { Container } from './styles';

const Form = () => {
  const {search, setSearch, filteredRegion} = useCountry()
  const [region, setRegion] = useState('')

  const handleChange = (event) => {
    setRegion(event.target.value)
    filteredRegion(event.target.value)
  }
  
  return (
    <Container>
        <input type="text" placeholder="Search for a country" onChange={(e) => setSearch(e.target.value)} value={search}/>
        <FormControl sx={{ m: 1, minWidth: 180}}>
        <InputLabel id="demo-simple-select-autowidth-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={region}
          onChange={handleChange}
          autoWidth
          label="Region"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}

export default Form