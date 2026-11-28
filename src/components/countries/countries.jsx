import { use, useState } from "react"
import Country from "./Country"
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountryFlags, setVisitedCountryFlags] = useState([]);
    const countriesCount = (country) => {
        console.log('countries count clicked ', country)
        visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedCountries = (country) => {
        visitedCountryFlags.push(country.flags.flags.png)
        const newCountryFlags = [...visitedCountryFlags]
        setVisitedCountryFlags(newCountryFlags)
    }
    return (<>
        <h2>This is a country of length {countriesData.length}</h2>
        <h2>Total Countries visited: {visitedCountries.length}</h2>
        <ol>
            {
            visitedCountries.map(country => <li>{country.name.common}</li>)
            }
        </ol>
        <div className="visited-flags-container">
            {
                visitedCountryFlags.map(country =><img src={country} alt="" height={80} width={150}/>)
            }
        </div>
        <div className="countriesStyle">
            {
                countriesData.map(country => <Country country={country} key={country.cca3.cca3} countriesCount={countriesCount} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
        </div>
        </>
    )
}
export default Countries 