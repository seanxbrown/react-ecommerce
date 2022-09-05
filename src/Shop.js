import "./assets/Shop.css"
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import Container from "react-bootstrap/Container";
import { useState } from "react";


const Shop = () => {
    const [basket, setBasket] = useState([]);
    
    function addToBasket() {
        setBasket(basket.concat({test: "obj"}))
    }



    return (
        <div>
            <Container>
                <header>
                    <h2 className="text-center">Shop with us</h2>
                </header>
                <section id="products-grid">
                    <ProductsComponent addToBasket={addToBasket}></ProductsComponent>
                </section>
            </Container>
        </div>
    )
}

export default Shop