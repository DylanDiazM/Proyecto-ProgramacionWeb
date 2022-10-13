import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CPUData from "./data/cpu.json"
import { BrowserRouter as Router, Routes, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="" data={CPUData} title="Products" /></div>
  );
}

export default App;
