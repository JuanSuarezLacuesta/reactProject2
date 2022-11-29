import Nav from 'react-bootstrap/Nav';
import { Cart } from 'react-bootstrap-icons';

import './CartWidget.css'



function CartWidget() {
  return (
    <div>
        <Nav.Link className='Cart' href="#cart"><Cart/>12</Nav.Link>
    </div>
    
  )
}

export default CartWidget