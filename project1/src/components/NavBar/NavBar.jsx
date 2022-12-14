import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import"./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='NavBackground '>

      <Container>
        {/* <Navbar.Brand className='NavText'>movieGates</Navbar.Brand> */}
        <Navbar.Toggle className='NavbarToggle' aria-controls="responsive-navbar-nav" />
        
        <Navbar.Brand><NavLink to='/#home' className='NavText'>movieGate</NavLink></Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link><NavLink to='/categorias/drinks' className='NavText'>Drinks</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/categorias/movie' className='NavText'>Movie</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/categorias/snacks' className='NavText'>Snacks</NavLink></Nav.Link>
          </Nav>

        </Navbar.Collapse>
          <Nav>
          <NavLink to='/cart' className='NavText'><CartWidget/></NavLink>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;