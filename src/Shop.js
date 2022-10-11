import "./assets/Shop.css"
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import Container from "react-bootstrap/Container";
import { useState } from "react";


const Shop = ({addToBasket, products}) => {
    

    return (
            <>
                <Container fluid id="shop-banner" className="d-flex flex-column justify-content-center align-items-center banner">
                    <h1 className="text-light">Shop</h1>
                </Container>
                <ProductsComponent addToBasket={addToBasket} products={products}></ProductsComponent>
            </>
    )
}

export default Shop