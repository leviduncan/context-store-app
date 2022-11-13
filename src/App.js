import { useContext, useState } from 'react'
import AppContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart'


function App() {
  const [cart, setCart] = useState([])
  return (
    <AppContext.Provider value={{ cart, setCart }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AppContext.Provider>


  );
}

export default App;
