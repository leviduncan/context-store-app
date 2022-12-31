import React, { useContext } from 'react'
import AppContext from '../context/store'
import logo from '../assets/logo.png'
import Search from './Search'
import { BsBag } from "react-icons/bs";
import Modal from './Modal'


function Header() {
    const { onSearchChange, counterCartItems } = useContext(AppContext)

    return (
        <>
            <div className="fluid-container">
                <header className="head">
                    <a href="/"><img className="logo" src={logo} alt="Cool Products" /></a>
                    <Search onSearchChange={onSearchChange} />
                    <div>Login</div>
                    <div className="basket-wrapper" type="button" data-bs-toggle="modal" data-bs-target="#basket">
                    <BsBag className="basket-icon" />{counterCartItems ? (
                            <button className="badge">{counterCartItems}</button>
                        ) : (
                            ''
                        )}
                    </div>
                </header>
            </div>
            <Modal />
        </>
    )
}

export default Header