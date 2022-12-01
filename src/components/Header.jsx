import React, { useContext, useState } from 'react'
import AppContext from '../context/store'

function Header() {
    const { counterCartItems } = useContext(AppContext)
  return (
    <div className="fluid-container">
        <header className="head">
        <div>
            <h3>Finest Product Store</h3>
        </div>
        <div>
            Cart{' '}{ counterCartItems ? (
                <button className="badge">{ counterCartItems }</button>
            ) : (
                ''
            )}{' '}
        </div>
    </header>
    </div>
  )
}

export default Header