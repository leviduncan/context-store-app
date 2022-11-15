import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/store'

export const Product = () => {
  const { products } = useContext(AppContext)
  const { id } = useParams()
  const productId = id

  const result = products.filter(item => item.id === productId)

  return (
    <div className="container product">
      <h1>Product</h1>
      {
        result.map((item) =>
          <div key={item.id} className="content">
            <div className="col-md-6">
              <img className="img-main" src={item.img} alt={item.name} />
            </div>
            <div className="col-md-6 desc">
              <h2>{item.name}</h2>
              <h1>${item.price}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}
