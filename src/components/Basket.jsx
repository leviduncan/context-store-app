import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/store'

function Basket() {
    const { onAdd, onRemove, cartItems, handleCalc } = useContext(AppContext)
    const newPrice = (currentPrice, salePrice) => {
        return handleCalc(currentPrice, salePrice)
    }
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price - c.price * (c.sale / 100), 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    // const ttl = price - price * (sale / 100)
    return (
        <>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div>
                            <Link to={`/product/${item.id}`}>
                                <img className="thumb" src={item.img} alt={item.name} />
                            </Link>
                        </div>
                        <div className="name">
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                            
                            <div className="text">{item.text}</div>
                        </div>
                        <div className="right">
                            <div className="price"><strong>${newPrice(item.price, item.sale)}</strong></div>
                            <div className="">
                                <button onClick={() => onRemove(item)} className="remove">
                                    -
                                </button>
                                <span className="qty">{item.qty}</span>
                                <button onClick={() => onAdd(item)} className="add">
                                    +
                                </button>
                            </div>
                        </div>


                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-6">Items Price</div>
                            <div className="col-4 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Tax Price</div>
                            <div className="col-4 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Shipping Price</div>
                            <div className="col-4 text-right">
                                ${shippingPrice.toFixed(2)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-4 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row basket-footer">
                            <button className="btn btn-primary btn-lg" onClick={() => alert('Implement Checkout!')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Basket