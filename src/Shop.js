import "./assets/Shop.css"
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import Container from "react-bootstrap/Container";
import { useState } from "react";


const Shop = ({addToBasket, products}) => {
    

    return (
            <Container fluid className="">
                <header>
                    <h2 className="text-center mb-4">Shop with us</h2>
                </header>
                <ProductsComponent addToBasket={addToBasket} products={products}></ProductsComponent>
            </Container>
    )
}

export default Shop