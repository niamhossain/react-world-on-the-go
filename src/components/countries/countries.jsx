import { use } from "react"
import Country from "./Country/Country"

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    return (
        <div>
            <h2>This is a country of length {countriesData.length}</h2>
            {
                countriesData.map(country => <Country country={country}></Country>)
            }
        </div>
    )
}
export default Countries 