import { useState } from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductsComponent = ({addToBasket, products}) => {


    return (
        <Row xs={1} lg={3} className="g-2 border border-1 border-danger">
            {products.map(productFromState => {
                return <Col>
                <Product key={Math.random() * 100000} product={productFromState} addToBasket={addToBasket}></Product>
                </Col>
            })}
        </Row>
    )

}

export default ProductsComponent;