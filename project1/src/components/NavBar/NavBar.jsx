import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


import './NavBar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='NavBackground' variant="dark">
    <Container>
      <Navbar.Brand className='NavText ' href="#home">movieGate</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='NavText' href="#pricing">Pricing</Nav.Link>
          <Nav.Link className='NavText' href="#movies">Movies</Nav.Link>
          <Nav.Link className='NavText' href="#items">Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <CartWidget/>
  </Navbar>
  )
}

export default NavBar

