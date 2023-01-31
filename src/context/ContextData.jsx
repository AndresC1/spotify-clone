import React, { useRef, useState, useEffect } from 'react'
import enlaces from '../data/rutas';
import { allGeneros } from '../API/Generos';
import { allAlbumes } from '../API/Albumes';
import { allArtistas } from '../API/Artistas';

const contextDataApp = React.createContext()

function ContextDataProvider({children}) {

  const [ListGeneros, setListGeneros] = useState([])
  const [ListArtistas, setListArtistas] = useState([])
  const [ListAlbumes, setListAlbumes] = useState([])

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

  useEffect(()=>{
    allGeneros().then(data => setListGeneros(data))
    allAlbumes().then(data => setListAlbumes(data))
    allArtistas().then(data => setListArtistas(data))
  }, [])

  return (
    <contextDataApp.Provider value={{
      contenedor,
      content_artist,
      content_song,
      enlaces,
      ListGeneros,
      ListAlbumes,
      ListArtistas
    }}>
      {children}
    </contextDataApp.Provider>
  )
}

export {contextDataApp, ContextDataProvider}
