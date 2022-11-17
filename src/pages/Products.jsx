import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import Search from '../components/Search'
import AppContext from '../context/store'
import Favs from '../components/Favs'

export const Products = () => {
  const { products } = useContext(AppContext)
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
      <Search onSearchChange={onSearchChange}/>
      </div>
      <div className="categories-section">
        <Categories categorySearch={categorySearch} />
      </div>
      <div className="prod-grid">
        {
        filteredProducts.map((item) => (
          <div key={item.id} className="card" style={{width: '18rem'}}>
            <img src={item.img} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title"><Link to={`/product/${item.id}`} >{item.name}</Link></h5>
              <div className="card-text">{item.text}</div>
              <Favs id={item.id} />
            </div>
          </div>
        ))
      }
      </div>
    </>
  )
}
