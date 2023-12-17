import React from 'react';
import { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] =useState([])
    useEffect( () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    },[])
    return(
      <div className='all-countries-container'>
        <h1>{countries.length}</h1>
         <div className='row  '>
         {
          countries.map(country => <Country name={country} key={country.flags.png}></Country> )
          // countries.map(country => <Country name={country.name.common} area={country.area} image={country.flags.png}></Country> )
         }
         </div>
        
      </div>
    )
};

export default Countries;