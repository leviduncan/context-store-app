import { useState } from 'react'
import AppContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart'
import { Product } from './pages/Product';
import data from './data'
import Header from './components/Header';


function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState(data)
  const [search, setSearch] = useState('')

  const onAdd = (products) => {
    const exist = cartItems.find((items) => items.id === products.id)
    if (exist) {
      setCartItems(
        cartItems.map((items) => 
          items.id === products.id ? { ...exist, qty: exist.qty + 1} : items
       )
        
      )
    } else {
      setCartItems([...cartItems, {...products, qty: 1}])
    }
  }

  const onRemove = (products) => {
    const exist = cartItems.find((items) => items.id === products.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((items) => items.id !== products.id))
    } else {
      setCartItems(
        cartItems.map((items) => 
          items.id === products.id ? { ...exist, qty: exist.qty - 1 } : items
        )
      )
    }
  }

  const handleCalc = (price, sale) => {
    const ttl = price - price * (sale / 100)
    return ttl.toFixed(2)
  }

  const counterCartItems = cartItems.length

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    setSearch(searchField)
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ onSearchChange, counterCartItems, onAdd, onRemove, cartItems, setCartItems, products, setProducts, handleCalc, search, setSearch }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Router>
    </AppContext.Provider>
    </div>


  );
}

export default App;
