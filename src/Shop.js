import "./assets/Shop.css"
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import Container from "react-bootstrap/Container";
import { useState } from "react";


const Shop = ({addToBasket, products}) => {
    

    return (
            <Container className="p-5">
                <header>
                    <h2 className="text-center">Shop with us</h2>
                </header>
                <section id="products-grid">
                    <ProductsComponent addToBasket={addToBasket} products={products}></ProductsComponent>
                </section>
            </Container>
    )
}

export default Shop