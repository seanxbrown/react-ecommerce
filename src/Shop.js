import "./assets/Shop.css"
import NavbarComponent from "./components/NavbarComponent";
import ProductsComponent from "./components/ProductsComponent";
import Container from "react-bootstrap/Container";


const Shop = () => {



    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Container>
                <header>
                    <h2 className="text-center">Shop with us</h2>
                </header>
                <section id="products-grid">
                    <ProductsComponent></ProductsComponent>
                </section>
            </Container>
        </div>
    )
}

export default Shop