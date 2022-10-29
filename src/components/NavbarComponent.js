import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const NavbarComponent = ({basket, numberOfItems}) => {

    return (
        <Navbar expand="lg" sticky="top" className="w-100 px-5">
            <Container fluid>
                <Link className="navbar-brand text-light" to="/react-ecommerce">Ecommerce Site</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link text-light" to="/react-ecommerce/about">About</Link>
                        <Link className="nav-link text-light" to="/react-ecommerce/shop">Shop</Link>
                        <Link className="nav-link text-light" to="/react-ecommerce/contact">Contact</Link>
                    </Nav>
                    <Link to="/react-ecommerce/basket" className="nav-link text-end text-light mx-4 text-decoration-none"><i class="bi bi-basket text-light fs-5"></i> {basket.length > 0 && <Badge pill bg="info" className="text-dark ms-1">{numberOfItems}</Badge>}</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent