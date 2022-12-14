import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import gFetch from "../../../helpers/gFetch";
import ItemList from "../../ItemList/ItemList";

import "./ItemListContainer.css"


function ItemListContainer({ greeting }) {


  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriasId } = useParams()

  useEffect(() => {

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

  return (
    <section>
      <div className="greeting">{greeting}</div>
      <div className="position">
      {loading ? <h2 className="greeting">Loading...</h2> : 
      <ItemList products= {products}/>}</div>
    </section>


  )
}

export default ItemListContainer