import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-2">
      <Container>
        <Navbar.Brand href="#home"><img
          alt=""
          src="https://www.elektrikell.ee/static/media/logo.eb02b150.svg"
          width="150"
          height="150"
          className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about" className="nav-link">Meist</Link>
            <Link to="/high" className="nav-link">Tipptund</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;