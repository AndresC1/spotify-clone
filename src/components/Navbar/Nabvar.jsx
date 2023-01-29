import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';
import { VscLibrary } from 'react-icons/vsc';
import ItemBox from './ItemBox';

const enlaces = [
    {
        "name": 'Inicio',
        "ruta": '/',
        "componentDefault": <BiHomeAlt className='h-auto w-5 lg:ml-2 lg:mr-4'/>
    },
    {
        "name": 'Buscar',
        "ruta": '/buscar',
        "componentDefault": <HiSearch className='h-auto w-5 lg:ml-2 lg:mr-4'/>
    },
    {
        "name": 'Biblioteca',
        "ruta": '/biblioteca',
        "componentDefault": <VscLibrary className='h-auto w-5 lg:ml-2 lg:mr-4'/>
    }
]

export default function Nabvar() {
    return (
    <nav className='lg:w-4/12 z-50 lg:max-w-[20rem] bg-[#222] lg:bg-black lg:overflow-y-auto lg:pl-6 flex justify-start items-start lg:flex-col fixed lg:relative w-full lg:h-auto h-20 bottom-0 left-0 rounded-t-3xl lg:rounded-none'>
        <img src="./img/Spotify_Logo.png" alt="Spotify_Logo" className='w-10/12 max-w-[14em] my-6 hidden lg:block' />
        <ul className='flex lg:flex-col justify-center items-center w-full pt-2 lg:pt-0'>
            {
                enlaces.map((element, index) => <ItemBox key={index} element={element}/>)
            }
        </ul>
    </nav>
  )
}
