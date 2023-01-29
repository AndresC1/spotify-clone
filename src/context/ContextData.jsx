import React from 'react'

const contextDataApp = React.createContext()

function ContextDataProvider({children}) {
  const Prueba = 'Creacion del contexto'
  return (
    <contextDataApp.Provider value={{
      Prueba
    }}>
      {children}
    </contextDataApp.Provider>
  )
}

export {contextDataApp, ContextDataProvider}
