import React from 'react'
import prueba from '/img/Legendary.jpg'
import { AiFillHeart } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import useContextApp from '../../hooks/useContextApp';

export default function Reproductor() {
    const contexto = useContextApp()
    return (
    <div className='w-full lg:z-50 lg:h-auto lg:pb-5 h-32 bg-[#111] fixed lg:bottom-0 bottom-14 right-0 border-[#222] lg:border-t-[1px] border-[1px] lg:rounded-none rounded-t-3xl'>
        <div className='w-full flex justify-between items-center'>
            <section className='text-[#eee] font-semibold flex justify-start items-start min-w-[2em] w-full mr-3'>
                <img src={prueba} alt="Legendary" className='w-16 h-16 mt-5 ml-5 rounded-md' />
                <div ref={contexto.contenedor} className='flex justify-center items-start flex-col mx-3 h-20 w-full text-clip overflow-hidden whitespace-nowrap'>
                    <h1 ref={contexto.content_song} className='text-Color-Spotify'>Legendary</h1>
                    <h3 ref={contexto.content_artist} id='cancionArtistas' className='text-xs text-[#555555] w-fit'>Daddy Yankee, Bad Bunny, Daddy Yankee</h3>
                </div>
            </section>
            <section className='text-white flex justify-end items-center mr-6 h-20 pt-4 space-x-6 w-auto'>
                <AiFillHeart className='h-auto w-7 text-green-600'/>
                <BsFillPlayFill className='h-auto w-9'/>
            </section>
        </div>
    </div>
  )
}
