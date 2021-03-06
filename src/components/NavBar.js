import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  //const categories = ["electronics","jewelery","men's clothing","women's clothing"];

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as='span'><Link to='/'>E-commerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto my-2 my-lg-0">
            <Link to={'/cart'}><CartWidget /></Link>
            <NavDropdown title="Categories" id="navbarDropdown">
              <NavDropdown.Item as='span'><Link to='/cat/electronics' >electronics</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/cat/jewelery' >jewelery</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
