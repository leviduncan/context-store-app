import React from 'react'
import { Products } from '../pages/Products'

export const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="products-section">
          <Products />
        </div>
      </div>
    </>
  )
}
