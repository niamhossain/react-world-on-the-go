import { useState } from 'react';
import './Country.css';
const Country = ({ country, countriesCount, handleVisitedCountries}) => {
    const [visit, setVisit] = useState(false);
    const handleVisit = () => {
        countriesCount(country);
        setVisit(!visit);
    }
    return (
        <div className={`countryStyle ${visit ? 'countryVisited' : 'countryNotVisited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4> Name: {country.name.common}</h4>
            <p>Population is : {country.population.population} <br/> {country.area.area > 300000 ? 'Big country' : 'Small country'}</p>
            <button onClick={handleVisit}>{
                visit ? 'Visited' : 'Not Visited'
                }</button>
                <button onClick={() => {handleVisitedCountries(country)}}>Add Flag</button>
        </div>
    );
};

export default Country;