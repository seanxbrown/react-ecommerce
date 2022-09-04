import { useState } from "react";
import Product from "./Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProductsComponent = () => {

const [products, setProducts] = useState([{name: "product 1", price: 1999, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop1.png"},{name: "product 2", price: 1519, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop2.png"},{name: "product 3", price: 1022, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop3.jpg"},{name: "product 4", price: 500, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop4.jpg"},{name: "product 5", price: 2098, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop5.jpg"},{name: "product 6", price: 4230, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop6.jpg"}])

    return (
        <Row md={6} className="p-5">
            {products.map(productFromState => {
                return <Product product={productFromState}></Product>
            })}
        </Row>
    )

}

export default ProductsComponent;