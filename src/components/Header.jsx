import React, { useContext } from 'react'
import AppContext from '../context/store'
import logo from '../assets/logo.png'
import Search from './Search'
import Basket from './Basket'
import { BsBag } from "react-icons/bs";


function Header() {
    const { onSearchChange, counterCartItems } = useContext(AppContext)

    return (
        <>
            <div className="fluid-container">
                <header className="head">
                    <a href="/"><img className="logo" src={logo} alt="Cool Products" /></a>
                    <Search onSearchChange={onSearchChange} />
                    <div className="basket-wrapper" type="button" data-bs-toggle="modal" data-bs-target="#basket">
                    <BsBag className="basket-icon" />{counterCartItems ? (
                            <button className="badge">{counterCartItems}</button>
                        ) : (
                            ''
                        )}
                    </div>
                </header>
            </div>
            <div className="modal fade" id="basket" tabindex="-1" aria-labelledby="basket" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Cart</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Basket />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header