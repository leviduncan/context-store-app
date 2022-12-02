import React from 'react'
import Hero from '../components/Hero'
import { Products } from '../pages/Products'

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="products-section">
          <Products />
        </div>
      </div>
    </>
  )
}
