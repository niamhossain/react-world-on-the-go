import { use, useState } from "react"
import Country from "./Country"
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const [visitedCountries, setVisitedCountries] = useState(0);
    const countriesCount = (countryName, visit) => {
        console.log("clicked " , countryName);
        (visit? setVisitedCountries(visitedCountries-1) : setVisitedCountries(visitedCountries+1))
    }
    return (<>
        <h2>This is a country of length {countriesData.length}</h2>
        <h2>Total Countries visited {visitedCountries}</h2>
        <div className="countriesStyle">
            {
                countriesData.map(country => <Country country={country} key={country.cca3.cca3} countriesCount={countriesCount}></Country>)
            }
        </div>
        </>
    )
}
export default Countries 