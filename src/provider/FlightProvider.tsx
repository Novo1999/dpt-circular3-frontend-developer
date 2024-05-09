import { ReactNode, useState } from 'react'
import { FlightContext } from '../context/index'

const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [flights, setFlights] = useState()

  return (
    <FlightContext.Provider value={{ flights, setFlights }}>
      {children}
    </FlightContext.Provider>
  )
}
export default FlightProvider
