import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Product = ({ product, addToBasket }) => {
    return (
        <Card className="product border-info border-3 border justify-content-evenly" id={product.id} >
            <Card.Body>
                <Card.Img className="product-image" src={product.image}></Card.Img>
                <ul className="list-unstyled m-auto">
                    <li><Card.Text className="text-center fw-bold">{product.title}</Card.Text></li>
                    <li><Card.Text className="text-center ">£{product.price}</Card.Text></li>
                    <li><Card.Text className="text-center product-description">{product.description}</Card.Text></li>
                </ul>
            </Card.Body>
            <Button type="button" className="m-4 test-button" onClick={addToBasket}>Add to basket</Button>
        </Card>
    )
}

export default Product