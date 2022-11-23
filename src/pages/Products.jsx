import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import Search from '../components/Search'
import AppContext from '../context/store'

export const Products = () => {
  const { products, handleCalc } = useContext(AppContext)
  const [search, setSearch] = useState('')

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    setSearch(searchField)
  }

  const categorySearch = (catSearch) => {
    setSearch(catSearch)
  }

  const filteredProducts = products.filter((item) => {
    return item.keywords.toLocaleLowerCase().includes(search)
  })



  return (
    <>
      <div className="row">
        <h1>Products</h1>
        <Search onSearchChange={onSearchChange} />
      </div>
      <div className="categories-section">
        <Categories categorySearch={categorySearch} />
      </div>
      <div className="prod-grid">
        {
          filteredProducts.map((item) => (
            <div key={item.id} className="card" style={{ width: '18rem' }}>
              <img src={item.img} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"><Link to={`/product/${item.id}`} >{item.name}</Link></h5>
                <div className="card-text">{item.text}</div>

              </div>
              <div className="card-footer">
                <div className="price-group">
                  <div className="new-price">${handleCalc(item.price, item.sale)}</div>
                  <div className="price">${item.price}</div>
                </div>
                <div className="btn-area">
                  <button className="btn btn-dark" type="button">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
