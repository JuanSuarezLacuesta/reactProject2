import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import gFetch from '../../../helpers/gFetch'
import ItemDetail from '../../ItemDetail/ItemDetail'
import CartContainer from '../CartContainer/CartContainer'

function ItemDetalContainer() {
  const [product, setProduct] = useState({})
  const { productId } = useParams()
  console.log(productId)



  useEffect(() => {
    gFetch(productId)
      .then(resp => setProduct(resp))
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <ItemDetail
        product={product}
      />
      <CartContainer />

    </div>
  )
}

export default ItemDetalContainer