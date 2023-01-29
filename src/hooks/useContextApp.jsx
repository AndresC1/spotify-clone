import React, { useContext } from 'react'
import { contextDataApp } from '../context/ContextData'

export default function useContextApp() {
  return (useContext(contextDataApp))
}
