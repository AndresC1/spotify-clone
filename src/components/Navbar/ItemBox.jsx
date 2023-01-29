import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemBox({ element }) {
  return (
    <Link
        id={element.name}
        to={element.ruta}
        className='w-full h-16 flex flex-col lg:flex-row lg:justify-start justify-center items-center  hover:text-Color-Spotify lg:border-r-8 border-transparent transition-all text-[#eee]'>
            {element.componentDefault}
            {element.name}
            <div className='w-5 rounded-full h-1 lg:hidden bg-Color-Spotify'></div>
    </Link>
  )
}
