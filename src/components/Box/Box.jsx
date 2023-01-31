import React from 'react'
import { Link } from 'react-router-dom'

export default function Box({element, typeData}) {
  return (
    <Link to={'/'+(typeData).toLowerCase()+'/'+element.id} className='lg:w-44 w-36 h-auto p-4 bg-[#1a1a1a] transition-all group hover:bg-[#2a2a2a] rounded-lg'>
      <img className='rounded-lg' src={'https://apimusic.acldev.tech/storage/img/'+typeData+'/'+element.imagen} alt={element.nombre} />
      <h1 className='text-[#eee] text-sm lg:text-base h-20 flex justify-center items-center font-semibold w-full text-center p-2 group-hover:text-[#eee] transition-all'>{element.nombre}</h1>
    </Link>
  )
}
