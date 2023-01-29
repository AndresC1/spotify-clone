import React, { useRef, useState, useEffect } from 'react'
import enlaces from '../data/rutas';

const contextDataApp = React.createContext()

function ContextDataProvider({children}) {
  //  Ref Reproductor de musica
  const contenedor = useRef(null);
  const content_artist = useRef(null);
  const content_song = useRef(null);
  
  const [TamWindow, setTamWindow] = useState(screen.width)
  window.addEventListener('resize', () => setTamWindow(screen.width))

  useEffect(() => {
    //  nombre de los artistas
    content_artist.current.clientWidth >= contenedor.current.clientWidth
    ? content_artist.current.classList.add('animate-scroll-content')
    : content_artist.current.classList.remove('animate-scroll-content')
    //  nombre de la cancion
    content_song.current.clientWidth >= contenedor.current.clientWidth
    ? content_song.current.classList.add('animate-scroll-content')
    : content_song.current.classList.remove('animate-scroll-content')
  }, [TamWindow]);  

  return (
    <contextDataApp.Provider value={{
      contenedor,
      content_artist,
      content_song,
      enlaces
    }}>
      {children}
    </contextDataApp.Provider>
  )
}

export {contextDataApp, ContextDataProvider}
