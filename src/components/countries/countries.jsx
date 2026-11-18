import { use } from "react"

const Countries = ({countriesPromise}) =>{
    const countriesData = use(countriesPromise)
    console.log(countriesData)
    return(
        <div>
            <h3>This is a country of length {countriesData.length}</h3>
        </div>
    )
}
export default Countries 