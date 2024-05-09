import { useEffect, useState } from 'react'
import text from '../data/LHR_CDG_ADT1_TYPE_1.txt'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import TripSwitcher from './components/TripSwitcher'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(text)
      .then((r) => r.text())
      .then((text) => {
        setData(JSON.parse(text))
      })
  }, [])

  return (
    <main>
      <Navbar />
      <TripSwitcher />
      <Filter />
    </main>
  )
}

export default App
