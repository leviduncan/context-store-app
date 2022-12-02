import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/store'

export const Product = () => {
  const { onAdd, products, handleCalc } = useContext(AppContext)
  const { id } = useParams()
  const productId = id

  const result = products.filter(item => item.id === productId)

  return (
    <div className="container product">
      <h1>Product</h1>
      {
        result.map((item) =>
          <div key={item.id} className="content">
            <div className="col-md-4">
              <img className="img-main" src={item.img} alt={item.name} />
            </div>
            <div className="col-md-4 desc">
              <h2>{item.name}</h2>
              <div className="price">
                <div className="new-price">${handleCalc(item.price,item.sale)}</div>
                <div className="old-price">${item.price}</div>
              </div>
              <p>{item.text}</p>
              <button className="btn btn-dark" type="button" onClick={()=>{onAdd(item)}}>Add to Cart</button>
            </div>
            
          </div>
        )
      }
    </div>
  )
}
