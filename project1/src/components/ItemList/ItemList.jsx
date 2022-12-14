import Item from "../Item/Item"


function ItemList({products }) {
  
  
  return (
      products.map(product => <Item product= {product}/>)
  
    )
}

export default ItemList