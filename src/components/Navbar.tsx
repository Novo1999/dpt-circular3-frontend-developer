import { GiHamburgerMenu } from 'react-icons/gi'
import { GoBell } from 'react-icons/go'

const Navbar = () => {
  return (
    <header>
      <nav className='bg-[#1F2937] h-12 w-full md:h-16 md:px-20 xl:px-60 text-[#BEC7B0] flex justify-between items-center px-2'>
        <GiHamburgerMenu className='text-xl block md:hidden' />
        {/* nav items */}
        <ul className='hidden md:flex gap-6 font-semibold text-sm'>
          <li>Dashboard</li>
          <li>Master Price</li>
          <li>Custom Price</li>
          <li>Calendar</li>
          <li>Reports</li>
        </ul>
        <div className='flex gap-2 items-center'>
          <GoBell className='text-xl md:text-2xl' />
          <img
            src='https://i.pravatar.cc/300'
            alt='avatar'
            className='rounded-full size-6 md:size-8'
          />
        </div>
      </nav>
      <div>
        <h1 className='font-bold text-2xl p-2 md:px-20 xl:px-60'>
          Master Price
        </h1>
        <hr />
      </div>
    </header>
  )
}
export default Navbar
