import { useState } from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"

const ProductsComponent = ({addToBasket, products}) => {


    return (
        <Container fluid className="mt-4">
            <h2 className="text-center">Product Range</h2>
            <Row xs={1} md={2} lg={3} className="g-2 pb-5 w-75 mx-auto">
                {products.map(productFromState => {
                    return <Product key={Math.random() * 100000} product={productFromState} addToBasket={addToBasket}></Product>
                    
                })}
            </Row>
        </Container>
        
    )

}

export default ProductsComponent;