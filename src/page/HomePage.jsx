import React from 'react'
import { Outlet } from 'react-router-dom';
import Nabvar from '../components/Navbar/Nabvar'
import Reproductor from '../components/Reproductor/Reproductor';
import useContextApp from '../hooks/useContextApp';


export default function HomePage() {
  const contexto = useContextApp()
  return (
    <div className='flex justify-start items-stretch h-[100vh]'>
        <Nabvar/>
        <div className='w-full'>
          <Outlet/>
          <h1>{contexto.Prueba}</h1>
          <Reproductor/>
        </div>
    </div>
  )
}
