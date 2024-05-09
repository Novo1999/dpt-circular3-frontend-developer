import Filter from './components/Filter'
import FlightInfoTable from './components/FlightInfoTable'
import Navbar from './components/Navbar'
import TripSwitcher from './components/TripSwitcher'
import FlightProvider from './provider/FlightProvider'

function App() {
  return (
    <main>
      <FlightProvider>
        <Navbar />
        <TripSwitcher />
        <Filter />
        <FlightInfoTable />
      </FlightProvider>
    </main>
  )
}

export default App
