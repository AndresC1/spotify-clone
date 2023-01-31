import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import TemplatePage from './page/TemplatePage'
import './css/main.css'
import { ContextDataProvider } from './context/ContextData'
import HomePage from './page/home/HomePage'

const rutas = createHashRouter([
  {
    path: '/',
    element: <TemplatePage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
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
