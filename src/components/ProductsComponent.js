import { useState } from "react";
import Product from "./Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProductsComponent = ({addToBasket, products}) => {


    return (
        <Row md={2} className="p-5 g-3">
            {products.map(productFromState => {
                return <Product product={productFromState} addToBasket={addToBasket}></Product>
            })}
        </Row>
    )

}

export default ProductsComponent;