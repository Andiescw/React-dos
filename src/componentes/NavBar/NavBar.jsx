import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navstyles.css'

import { CartWidget } from '../CartWidget/CartWidget';



function NavBar() {
    return (
        <div>

          <Navbar collapseOnSelect expand="lg" variant="dark" className="background">
            <Container>
              <Navbar.Brand className="home" href="#home">
              <img
              src='/public/indieandie.svg'
              width="30"
              height="30"
              className="logo d-inline-block align-top"
              alt="App logo"
              />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Shop</Nav.Link>
                  </Nav>
                  
                  <Nav className="cart">
                    <Nav.Link eventKey={2} href="#memes">
                      <CartWidget />
                    </Nav.Link>

                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
);
}

export default NavBar;