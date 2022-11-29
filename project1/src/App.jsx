import { useState } from 'react'


//-----bootstrap-----//
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  let saludo = 'SOY UN SALUDO'
  return (
    <body>
      <NavBar/>
      <div>
        <ItemListContainer greeting = {saludo}/>
      </div>
    </body>
  )
}

export default App
