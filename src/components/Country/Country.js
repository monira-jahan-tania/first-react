import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const { area, region, flags } = props.country
    return (

        <div className='country'>
            <h2>Name: {props.name}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Populations: {props.country.population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;