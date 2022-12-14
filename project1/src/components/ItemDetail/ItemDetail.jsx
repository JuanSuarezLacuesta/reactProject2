import Counter from '../Counter/Counter'

function ItemDetail({ product }) {
  
  const onAdd = (cantidad) =>{
    console.log('cantidad seleccionada', cantidad)
  }
  
  return (
    <section className='ItemDetailBox'>
      <div className='position'>
        <img src={product.img} alt="picture" className='picturesDetailItems' />
      </div>
      <div className='position'>
      {product.name}
      </div>
    <div className='position'>
      <Counter
      stock={5}
      initial={1}
      onAdd={onAdd}
      />
    </div>
    </section>
  )
}

export default ItemDetail