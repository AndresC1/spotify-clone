import React from 'react'
import { Outlet } from 'react-router-dom';
import Nabvar from '../components/Navbar/Nabvar'
import Reproductor from '../components/Reproductor/Reproductor';


export default function HomePage() {
  return (
    <div className='flex justify-start items-stretch h-[100vh]'>
      <Nabvar/>
      <div className='w-full overflow-y-scroll py-5 data_container pb-52 lg:pb-36'>
        <Outlet/>
        <Reproductor/>
      </div>
    </div>
  )
}
