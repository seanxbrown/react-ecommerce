import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

const NavbarComponent = ({basket, numberOfItems}) => {


    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Link className="navbar-brand" to="/react-ecommerce">Ecommerce Site</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link text-light" to="/react-ecommerce/about">About</Link>
                    <Link className="nav-link text-light" to="/react-ecommerce/shop">Shop</Link>
                    <Link className="nav-link text-light" to="/react-ecommerce/contact">Contact</Link>
                    </Nav>
                    <Link to="/react-ecommerce/basket" className="text-end text-light mx-4">Basket {basket.length > 0 && `(${numberOfItems})`}</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent