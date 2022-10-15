import React, { useState } from 'react';
import './index.css';
import BestSellPerif from './Components/ModalRating/BestSellPerif';
import Rating from './Components/ModalRating/Rating';
import UsersHeader from './Components/ModalRating/UsersHeader';
import Influencers from './Components/ModalRating/Influencers';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};

function App() {
  return (
    <UsersHeader></UsersHeader>
  );
}

export default App;
