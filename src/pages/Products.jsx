import React, { useContext } from 'react'
import Categories from '../components/Categories'
import AppContext from '../context/store'

export const Products = () => {
  const { products } = useContext(AppContext)

  console.log(products)
  return (
    <>
      <div className="row">
        <h1>Products</h1>
      </div>
      <div className="categories-section"><Categories /></div>
      <div className="prod-grid">
        {
        products.map((item) => (
          <div key={item.id} className="card" style={{width: '18rem'}}>
            <img src={item.img} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <div className="card-text">{item.text}</div>
            </div>
          </div>
        ))
      }
      </div>
    </>
  )
}
