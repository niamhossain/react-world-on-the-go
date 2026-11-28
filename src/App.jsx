import './App.css'
import Countries from './components/countries/countries'
import { Suspense } from 'react'
function App() {
  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())
  return (
    <>
      <h1>Hello react</h1>
      <Suspense fallback={<p>Waiting for response</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
