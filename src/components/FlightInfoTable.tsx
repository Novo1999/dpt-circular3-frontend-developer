import { useContext } from 'react'
import { FlightContext } from '../context'
import { TABLE_HEADERS } from '../utils/constants'

const FlightInfoTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { flights } = useContext<any>(FlightContext)

  return (
    <section className='md:px-20 xl:px-60 mt-2'>
      <p className='font-semibold mb-6'>Data parsed successfully</p>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-200'>
            <tr>
              {TABLE_HEADERS.map((header, index) => (
                <th
                  key={index}
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 text-slate-500 uppercase text-sm'>
            {flights?.flightOffer.map(
              ({ itineraries, seat, price, fareBasis }, index) => {
                const [fares] = [...fareBasis]
                const [seats] = [...seat]
                const [{ duration, segments }] = itineraries

                return (
                  <tr key={index} className='bg-slate-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {segments.map(
                        ({ marketingCarrier, flightNumber, aircraft }) => {
                          return (
                            <p
                              key={flightNumber}
                            >{`${marketingCarrier} ${aircraft}`}</p>
                          )
                        }
                      )}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {fares.map((fare, index) => (
                        <p key={index}>{fare}</p>
                      ))}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {segments.map(({ flightNumber }) => {
                        return <p key={flightNumber}>{flightNumber}</p>
                      })}
                    </td>
                    <td>
                      {fares.map((fare, index) => {
                        return <p key={index}>{fare}</p>
                      })}
                    </td>
                    <td>
                      {seats.map((seat, index) => {
                        return (
                          <p className='text-center' key={index}>
                            {seat}
                          </p>
                        )
                      })}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {segments.map(
                        (
                          {
                            departure: { iataCode: depIataCode },
                            arrival: { iataCode: arrivalIataCode },
                          },
                          index
                        ) => {
                          return (
                            <p key={index}>
                              {depIataCode} - {arrivalIataCode}
                            </p>
                          )
                        }
                      )}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {segments.map(({ departure: { at } }, index) => {
                        return (
                          <p key={index}>{`${at.split('T')[0]} - ${
                            at.split('T')[1]
                          }`}</p>
                        )
                      })}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {segments.map(({ arrival: { at } }, index) => {
                        return (
                          <p key={index}>{`${at.split('T')[0]} - ${
                            at.split('T')[1]
                          }`}</p>
                        )
                      })}
                    </td>
                    <td className='text-center'>{duration}</td>
                    <td className='px-6 py-4 whitespace-nowrap flex flex-col items-center'>
                      <p>{price}</p>
                      <button className='bg-blue-800 text-white p-2 rounded-md px-4'>
                        SELECT
                      </button>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default FlightInfoTable
