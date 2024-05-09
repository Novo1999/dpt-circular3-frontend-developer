const Filter = () => {
  return (
    <section className='px-2 md:px-20 xl:px-60 mt-6'>
      <hr className='bg-blue-500 dark:bg-blue-500 h-[2px]' />
      <ul className='h-full *:border *:flex *:items-center *:justify-between *:px-2 *:border-slate-700 flex *:h-12 my-2 flex-wrap gap-2'>
        <li className='w-full md:w-36'>LHR</li>
        <li className='w-full md:w-36'>CDG</li>
        <li className='w-full md:w-36'>22-12-2022</li>
        <li className='w-full md:w-24'>Day-</li>
        <li className='w-full md:w-24'>Day+</li>
        <li className='w-full md:w-48 flex-grow'>Any time</li>
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
      <hr className='bg-blue-500 dark:bg-blue-500 h-[2px]' />
    </section>
  )
}
export default Filter
