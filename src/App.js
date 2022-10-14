import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductDetail from "./components/Product/ProductDetail";
import CPUData from "./data/cpu.json"
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className="App">
          <SearchBar placeholder="" data={CPUData} title="Products" /></div>} />
        <Route path="/:name" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
