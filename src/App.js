import React from 'react';
import './App.css';
import { Header } from './componentes/header';
import 'boxicons';
import { Support } from './componentes/Support';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Paginas } from './componentes/Paginas';
import { Guide } from './componentes/historia17/Guide';
import { Questions } from './componentes/historia18/Questions';
import { Ticket } from './componentes/historia19/Ticket';
import { Screen } from './componentes/historia15/Screen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header><Routes><Route path='/Support'element={<Support/>}/></Routes></Header>
      </BrowserRouter>
      <Paginas/>
      <Screen></Screen>

      
    </div>
  );
}

export default App;
