import React from 'react';
import {Nav,Container} from 'react-bootstrap';
import CartWidget from './components/CartWidget'

function NavBar() {
  return (
    <div>
       <NavBar bg="dark" variant="dark">
            <Container>
                <NavBar.Brand href="#home">NavBar</NavBar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Inmobiliario</Nav.Link>
                        <Nav.Link href="#pricing">Publicaciones</Nav.Link>
                    </Nav>
                    <CartWidget></CartWidget>
            </Container>
        </NavBar>
    </div>
  );
}

export default NavBar;