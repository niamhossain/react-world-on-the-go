import { use } from "react"
import Country from "./Country"
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    return (<>
        <h2>This is a country of length {countriesData.length}</h2>
        <div className="countriesStyle">
            {
                countriesData.map(country => <Country country={country} key={country.cca3.cca3}></Country>)
            }
        </div>
        </>
    )
}
export default Countries 