import { useContext } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import text from '../../data/LHR_CDG_ADT1_TYPE_1.txt'
import { FlightContext } from '../context'

const Filter = () => {
  const { setFlights } = useContext(FlightContext)

  const getData = () => {
    fetch(text)
      .then((r) => r.text())
      .then((text) => {
        setFlights(JSON.parse(text))
      })
  }

  return (
    <section className='px-2 md:px-20 xl:px-60 mt-6'>
      <hr className='bg-blue-500 dark:bg-blue-500 h-[2px]' />
      <ul className='h-full *:border *:flex *:font-semibold *:items-center *:justify-between *:px-2 *:border-slate-700 flex *:h-12 my-2 flex-wrap gap-2'>
        <li className='w-full md:w-36'>LHR</li>
        <li className='w-full md:w-36'>CDG</li>
        <li className='w-full md:w-36'>
          <input type='date' name='date' defaultValue='2022-12-22' id='date' />
        </li>
        <li className='w-full md:w-24'>
          <p>Day-</p>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li className='w-full md:w-24'>
          <p>Day+</p>
          <MdOutlineKeyboardArrowDown />
        </li>
        <li className='w-full md:w-48 flex-grow'>
          <p>Any time</p>
          <MdOutlineKeyboardArrowDown />
        </li>
        <div className='!hidden md:flex border-none *:border *:items-center *:justify-between *:px-2 *:border-slate-700 *:h-12 flex-wrap gap-2'>
          <button className='border-none text-xl font-bold'>+</button>
          <li className='w-36'>ADT</li>
          <li className='w-36'>1</li>
          <button className='border-none text-xl font-bold'>+</button>
        </div>
        <div className='hidden md:flex border-none h-full gap-2 m-auto'>
          <button className='border-none text-xl font-bold'>+</button>
          <li className='w-24 xl:w-48 border p-2 border-slate-700'>ADT</li>
          <li className='w-24 xl:w-48 border p-2 border-slate-700'>1</li>
          <button className='border-none text-xl font-bold'>+</button>
        </div>
      </ul>
      <hr className='bg-blue-500 dark:bg-blue-500 h-[2px] opacity-50' />

      <div className='h-full flex flex-col gap-2 md:flex-row md:h-12 justify-between items-center'>
        <div className='flex gap-2'>
          <input type='checkbox' name='extra' id='checkbox' />
          <p className='font-semibold'>Extra Options</p>
        </div>
        <div className='flex gap-2 *:font-bold'>
          <p>Environment</p>
          <input type='radio' name='environment' id='environment' />
          <p className='font-semibold'>Dummy</p>
          <input type='radio' name='environment' id='environment' />
          <p className='font-semibold'>PDT</p>
        </div>
        <button
          onClick={getData}
          className='bg-blue-800 text-white p-2 rounded-md px-6'
        >
          SEARCH
        </button>
      </div>

      <hr className='bg-blue-500 dark:bg-blue-500 h-[2px]' />
    </section>
  )
}
export default Filter
