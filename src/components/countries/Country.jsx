import React from 'react';
import './Country.css';
const Country = ({ country }) => {
    const handleVisit = () => {
        console.log("btn clicked");
    }
    return (
        <div className='countryStyle'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4> Name: {country.name.common}</h4>
            <p>Population is : {country.population.population} <br/> {country.area.area > 300000 ? 'Big country' : 'Small country'}</p>
            <button onClick={handleVisit}>Not Visited</button>
        </div>
    );
};

export default Country;