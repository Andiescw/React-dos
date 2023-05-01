import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from 'react'
//import './App.css'

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Form } from './componentes/Form/Form';

import NavBar  from "./componentes/NavBar/NavBar"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { CartContainer } from './componentes/CartContainer/CartContainer';
import { CartContextProvider } from './context/CartContext';
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
//import { ItemCount } from './componentes/ItemCount/ItemCount';


function App() {

  console.log('Renderizado de app')
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element= {<ItemListContainer />} />
            <Route path='/cart' element= {<CartContainer />} /> 
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='*' element={ <Navigate to='/' /> } /> 
          </Routes> 
        </BrowserRouter>
      </div>
    </CartContextProvider>
  )
}

export default App
