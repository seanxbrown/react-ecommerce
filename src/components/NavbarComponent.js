import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export const NavbarComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Link className="navbar-brand" to="/">Ecommerce Site</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link text-light" to="/about">About</Link>
                    <Link className="nav-link text-light" to="/locations">Locations</Link>
                    <Link className="nav-link text-light" to="/contact">Contact</Link>
                    </Nav>
                    <Navbar.Text href="#" className="text-end text-light">Checkout</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent