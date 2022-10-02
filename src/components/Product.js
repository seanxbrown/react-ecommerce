import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"


const Product = ({ product, addToBasket }) => {
    return (
        <Col className="d-flex"> 
            <Card className="product border-secondary border-2 border flex-fill" id={product.id} >
                <Card.Body>
                    <div class="product-img-div my-3">
                        <Card.Img className="product-image" src={product.image}></Card.Img>
                    </div>
                    <ul className="list-unstyled m-auto">
                        <li><Card.Text className="text-center fw-bold">{product.title}</Card.Text></li>
                        <li><Card.Text className="text-center ">£{product.price}</Card.Text></li>
                    </ul>
                </Card.Body>
                <Button type="button" variant="success" className="m-4 test-button" onClick={addToBasket}>Add to basket</Button>
            </Card>
        </Col>
        
    )
}

export default Product