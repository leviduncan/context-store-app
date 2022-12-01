import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Basket from '../components/Basket'
import Categories from '../components/Categories'
import Search from '../components/Search'
import AppContext from '../context/store'

export const Products = () => {
  const { onAdd, products, handleCalc } = useContext(AppContext)
  const [search, setSearch] = useState('')
  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [id, setId] = useState('')

  // const listOfItems = {
  //   id:id,
  //   name: name,
  //   price: price
  // }
  // const [cartList, setCartList] = useState(listOfItems)

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

  // const addToCart = (id, name, price, sale) => {
  //   setId(id)
  //   setName(name)
  //   setPrice(handleCalc(price, sale))
  //   console.log(id, name, price, sale)
    
  //   setCartList({...cartList, name:name})
  //   console.log(cartList)
  // }

  return (
    <>
      <div className="row">
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
                  <button className="btn btn-dark" type="button" onClick={()=>{onAdd(item)}}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="cart"><Basket /></div>
    </>
  )
}
