import React, { useContext } from 'react'
import AppContext from '../context/store'
import Basket from './Basket'

function Modal() {
    const { counterCartItems } = useContext(AppContext)
  return (
    <>
        <div className="modal fade" id="basket" tabIndex="-1" aria-labelledby="basket" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cart ({counterCartItems === 1 ? `${counterCartItems} item` : `${counterCartItems} items`})</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Basket />
                        </div>
                    </div>
                </div>
                
            </div>
    </>
  )
}

export default Modal