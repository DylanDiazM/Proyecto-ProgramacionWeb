import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Support } from './Support';


export const Paginas = () => {
  return (

    <secttion>
      <BrowserRouter>
      <Routes>
      
         <Route path='/Productos'  element={<Support/>}/>
        
        
        </Routes>
        </BrowserRouter>
      
    </secttion>
  )
}