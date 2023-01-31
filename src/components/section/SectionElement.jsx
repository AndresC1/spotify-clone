import React, { useRef, useState } from 'react'
import TitleSection from './titleSection'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Box from '../Box/Box';
import LoadBox from './LoadBox';

export default function SectionElement({dataElement, nameSection, Container}) {
    const refContainer = useRef(null)
    const [countMove, setCountMove] = useState(0)
    function moveDiv(){
        refContainer.current.classList.add('-translate-x-['+(countMove+12)+'rem]')
        setCountMove(countMove+12)
    }
    let components = []
    for(let i=0; i<8; i++){components.push(<LoadBox/>)}
  return (
    <>
        <nav className='flex justify-between items-center mr-10 my-6'>
            <TitleSection titulo={nameSection}/>
            <div className='sm:flex justify-evenly items-center space-x-4 hidden'>
                <button className='w-9 h-9 bg-[#1a1a1a] rounded-full text-[#ccc] hover:text-[#eee] flex justify-center items-center'><FiChevronLeft className='w-10/12 mr-1 h-auto'/></button>
                <button onClick={moveDiv} className='w-9 h-9 bg-[#1a1a1a] rounded-full text-[#ccc] hover:text-[#eee] flex justify-center items-center'><FiChevronRight className='w-10/12 ml-1 h-auto'/></button>
            </div>  
        </nav>
        <div className='flex justify-center items-center px-10 flex-wrap'>
            <div className='data_container flex w-full items-center justify-start overflow-x-scroll h-auto'>
                <div ref={refContainer} className='w-auto h-auto flex space-x-3 justify-center items-center'>
                    {
                        dataElement.length === 0 
                        ? components
                        : dataElement.map((element) => <Box key={element.id} element={element} typeData={nameSection}/>)
                    }
                </div>
            </div>
        </div>
    </>
  )
}
