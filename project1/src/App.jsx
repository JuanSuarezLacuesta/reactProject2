import { useState } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetalContainer from './components/containers/ItemDetailContainer/ItemDetalContainer';

//-----bootstrap-----//
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartContainer from './components/containers/CartContainer/CartContainer';
import CartWidget from './components/CartWidget/CartWidget';

import './App.css'


function App() {
  let saludo = 'WHATEVER YOU NEED FOR THE MOVIES BEGINS HERE'
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
      
        <Route path='/' element={<ItemListContainer greeting = {saludo}/>}/>
        <Route path='/categorias/:categoriasId' element={<ItemListContainer/>}/>

        <Route path='/detail/:productId' element={<ItemDetalContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        

        {/* para cuando no haya ruta aviable nos manda a home */}
        <Route path='*' element={<Navigate to='/'/> }/>


      </Routes>
  
    </BrowserRouter>
  )
}

export default App
