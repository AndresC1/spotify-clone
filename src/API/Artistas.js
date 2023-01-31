const urlBase = import.meta.env.VITE_API_URL

async function allArtistas(){
  let data = await fetch(urlBase+'/artistas')
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))
  
  return data
}

export {allArtistas}