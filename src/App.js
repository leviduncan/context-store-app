import { useState } from 'react'
import AppContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart'
import { Product } from './pages/Product';
import data from './data'


function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(data)

  return (
    <AppContext.Provider value={{ cart, setCart, products, setProducts }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </AppContext.Provider>


  );
}

export default App;
