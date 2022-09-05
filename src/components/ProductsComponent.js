import { useState } from "react";
import Product from "./Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProductsComponent = ({addToBasket}) => {

const [products, setProducts] = useState([{id: 1, name: "product 1", price: 1999, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop1.png"},{id: 2, name: "product 2", price: 1519, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop2.png"},{id: 3, name: "product 3", price: 1022, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop3.jpg"},{id: 4, name: "product 4", price: 500, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop4.jpg"},{id: 5, name: "product 5", price: 2098, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop5.jpg"},{id: 6, name: "product 6", price: 4230, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop6.jpg"}])

    return (
        <Row md={6} className="p-5">
            {products.map(productFromState => {
                return <Product product={productFromState} addToBasket={addToBasket}></Product>
            })}
        </Row>
    )

}

export default ProductsComponent;