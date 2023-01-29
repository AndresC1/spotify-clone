import { BiHomeAlt } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';
import { VscLibrary } from 'react-icons/vsc';

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

export default enlaces