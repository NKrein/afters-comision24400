import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {

  //const categories = ["electronics","jewelery","men's clothing","women's clothing"];

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <NavDropdown title="Categories" id="navbarDropdown">
              <NavDropdown.Item as='span'>electronics</NavDropdown.Item>
              <NavDropdown.Item as='span'>jewelery</NavDropdown.Item>
              <NavDropdown.Item as='span'>men's clothing</NavDropdown.Item>
              <NavDropdown.Item as='span'>women's clothing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
