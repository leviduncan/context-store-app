import React from 'react'
import { Cart } from '../pages/Cart'
import { Products } from '../pages/Products'

export const Home = () => {
  return (
    <div className="d-flex">
        <div className="col-8 products-section">
            <Products />
        </div>
        <div className="col-4 cart-section">
            <Cart />
        </div>
    </div>
  )
}
