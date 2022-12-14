import Nav from 'react-bootstrap/Nav';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import './CartWidget.css'



function CartWidget() {
  return (
    <Link to='/#home' className='Cart'> <Cart/>12</Link>
    
    
  )
}

export default CartWidget