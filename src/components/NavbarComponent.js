import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavbarComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>Ecommerce Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Locations</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Navbar.Text href="#" className="text-end">Checkout</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}