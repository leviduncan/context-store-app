import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rate from '../components/Rate'
import AppContext from '../context/store'

export const Product = () => {
  const { onAdd, products, handleCalc } = useContext(AppContext)
  const { id } = useParams()
  const [productId] = useState(id)
  
  const result = products.filter(item => item.id === productId)
  const similar = products.filter(item => item.keywords)
console.log(result.id)
console.log(productId)
  return (
    <>
      <div className="container product">
        <h1>Product</h1>
        {
          result.map((item) =>
            <div key={item.id} className="content">
              <div className="col">
                <img className="img-main" src={item.img} alt={item.name} />
              </div>
              <div className="col desc">
                <h3>{item.name}</h3>
                <div className="price">
                  <div className="new-price">${handleCalc(item.price, item.sale)}</div>
                  <div className="old-price">${item.price}</div>
                </div>
                <Rate rating={item.stars} />
                <p>{item.text}</p>
                <p>{item.keywords}</p>
                <button className="btn btn-dark" type="button" onClick={() => { onAdd(item) }}>Add to Cart</button>
              </div>
              HOLLA!
            </div>
          )
        }
        <div>
          <hr />
        </div>
        <div>
              <h4>You may also like similar products</h4>
              <div className="similar">
              {
                similar.map((item) => 
                <div className="item">
                  <img className="img-main" src={item.img} alt={item.name} />
                  <button className="btn btn-dark" type="button" onClick={() => { onAdd(item) }}>Add to Cart</button>
                <div className="price">
                  <div className="new-price">${handleCalc(item.price, item.sale)}</div>
                </div>
                <Rate rating={item.stars} />
                  <p className="title">{item.name}</p>
                </div>
                )
              }
              </div>
        </div>
      </div>
      
    </>
  )
}
