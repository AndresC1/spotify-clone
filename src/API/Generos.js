const urlBase = import.meta.env.VITE_API_URL

async function allGeneros(){
  let data = await fetch(urlBase+'/generos')
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))
  
  return data
}

export {allGeneros}