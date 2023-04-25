

import { useState } from 'react'

// estilos
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// NavBar
import NavBar  from "./componentes/NavBar"

// ItemListContainer
//import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

import Button from 'react-bootstrap/Button';
import ItemListContainer from './componentes/ItemListContainer';


function App() {

  /*const myPromise = () => {
    return new Promise((res, rej) => {
      res([
        { id: 1, name: "Item1", description: "Description1", stock: 4 },
        { id: 2, name: "Item2", description: "Description2", stock: 2 },
        { id: 3, name: "Item3", description: "Description3", stock: 5 },
      ]);
    });
  };

  setTimeout(() => {
    myPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }, 3000); */

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Te ayudo a impulsar tu negocio'}/>
      
      <div>
        <h1> Hola, espero que esto si se muestre</h1>
      </div>

      
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Like
        </Button>{' '}
      </div>

    </div>
  )
}

export default App
