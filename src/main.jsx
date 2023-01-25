import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import HomePage from './page/HomePage'
import './css/main.css'

const rutas = createHashRouter([
  {
    path: '/',
    element: <HomePage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rutas}>
  </RouterProvider>
)
