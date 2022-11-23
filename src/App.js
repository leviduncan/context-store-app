import { useState } from 'react'
import AppContext from './context/store';
import FavoriteContext from './context/FavoriteContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart'
import { Product } from './pages/Product';
import data from './data'


function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(data)
  const [favs, setFavs] = useState(false)

  const handleCalc = (price, sale) => {
    const ttl = price - price * (sale / 100)
    return ttl.toFixed(2)
  }

  return (
    <AppContext.Provider value={{ cart, setCart, products, setProducts, handleCalc }}>
      <FavoriteContext.Provider value={{ favs, setFavs }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Router>
      </FavoriteContext.Provider>
    </AppContext.Provider>


  );
}

export default App;
