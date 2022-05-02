import styled from 'styled-components'
import { NavBar } from 'react-bootstrap';

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
            </Container>
        </NavBar> 
    </div>
  );
}

export default NavBar;