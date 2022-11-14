import React, { useContext } from 'react'
import AppContext from '../context/store'

function Categories() {
    const { products } = useContext(AppContext)
  return (
    <div>Categories</div>
  )
}

export default Categories