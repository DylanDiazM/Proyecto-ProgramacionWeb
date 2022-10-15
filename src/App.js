import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./components/Cart/Cart";
import CPUdata from "./components/data/cpu"
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  const { products } = CPUdata;

  const [cart, setCart] = useState([])

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    console.log(data)
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path='/' element={<div className="App">
          <SearchBar placeholder="" data={products} title="Products" /></div>} />
        <Route path="/:name" element={<div className="App"><ProductDetail data={products} addToCart={addToCart} /></div>} />
        <Route path="/cart" element={<div className="App"><Cart cart={cart} /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
