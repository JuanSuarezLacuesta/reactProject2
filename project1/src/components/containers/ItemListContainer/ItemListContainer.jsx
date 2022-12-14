//--- PROMISE ---//

//-- import desde gFetch para mejor ordenado --//
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import gFetch from "../../../helpers/gFetch";
import ItemList from "../../ItemList/ItemList";


import "./ItemListContainer.css"
const task = new Promise((resolve, reject) => {
  //-- acciones --//
  let res = 2 + 6;

  resolve('todo bien me devolvio')
  reject(res + 'error')

})



function ItemListContainer({ greeting }) {





  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriasId } = useParams()




  // //-- se renderiza la primera vez --//
  useEffect(() => {
    //continua question al servidor en este caso cada 10s
    // setInterval(() => {

    // }, 1000);
    //-- simulacion de consulta a API --//

    if (categoriasId) {
      
      gFetch()
        .then(result => { return setProducts(result.filter(products => products.categorias === categoriasId)) })
        .catch((err) => { console.log(err) })
        .finally(() => setLoading(false))

    } else {

      gFetch()
        .then(result => { return setProducts(result) })
        .catch((err) => { console.log(err) })
        .finally(() => setLoading(false))
    }


  }, [categoriasId])
  console.log('productos: ', products)


  task.then(result => {
    // throw new Error('Simulacion de error')
    return result
    console.log(result)
  })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => console.log('siempre se ejecuta'))






  //--- POKEMON ---//

  const [data, setData] = useState(null)
  // useEffect(()=>{
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //   .then(resp => (resp.json()))
  //   .then(respParsed => {return setData(respParsed)})
  //   .catch( (err) => {console.log(err)} )

  // }, [])


  return (
    <div className="">
      <div className="greeting">
        {greeting}
      </div>
      {/* se crea y llama a products */}
      <div className="position">
      {loading ? <h2 className="greeting">Loading...</h2> : <ItemList products= {products}/>}
      </div>

      {/*--- POKEMON ---*/}
      {/* <div>
        {data.name}
      </div> */}

    </div>


  )
}

export default ItemListContainer