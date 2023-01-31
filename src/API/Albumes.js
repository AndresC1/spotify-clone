const urlBase = import.meta.env.VITE_API_URL

async function allAlbumes(){
  let data = await fetch(urlBase+'/albumes')
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))
  
  return data
}

export {allAlbumes}