import React, { useContext } from 'react'
import AppContext from '../context/store'

function Basket() {
    const { onAdd, onRemove, cartItems } = useContext(AppContext)
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-6">{item.name}</div>
                        <div className="col-6">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>

                        <div className="col-6 text-right">
                            {item.qty} x <strong>${item.price.toFixed(2)}</strong>
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
                        <div className="row">
                            <button className="btn btn-primary" onClick={() => alert('Implement Checkout!')}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Basket