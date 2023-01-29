import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import HomePage from './page/HomePage'
import './css/main.css'
import { ContextDataProvider } from './context/ContextData'

const rutas = createHashRouter([
  {
    path: '/',
    element: <HomePage/>,
    children: [
      {
        path: '/',
        element: <h1 className='text-white'>Inicio</h1>
      },
      {
        path: '/buscar',
        element: <h1 className='text-white'>Buscar</h1>
      },
      {
        path: '/biblioteca',
        element: <h1 className='text-white'>biblioteca</h1>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextDataProvider>
    <RouterProvider router={rutas}/>
  </ContextDataProvider>
)
