import React from 'react'
import Box from '../../components/Box/Box'
import useContextApp from '../../hooks/useContextApp'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TitleSection from '../../components/section/titleSection';
import SectionElement from '../../components/section/SectionElement';

export default function HomePage() {
    const contexto = useContextApp()
    return (
    <>
        <section className='flex justify-start items-center h-12 my-5'>
            <h1 className='text-[#F5F5F5] font-bold text-xl py-4 px-10'>Buenas noches</h1>
        </section>
        <SectionElement dataElement={contexto.ListGeneros} nameSection='Generos'/>
        <SectionElement dataElement={contexto.ListArtistas} nameSection='Artistas'/>
        <SectionElement dataElement={contexto.ListAlbumes} nameSection='Albumes'/>
    </>
  )
}
