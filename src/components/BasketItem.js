import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import formatThousands from "format-thousands";

const Product = ({ updateQuantityForBasketItem, product, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }) => {
    return (
        <Col className="d-flex align-items-stretch justify-content-evenly">
            <Card className="product flex-fill shadow" id={product.id} >
                <Card.Body>
                    <div className="product-img-div my-3">
                        <Card.Img className="product-image" src={product.image} variant="top"></Card.Img>
                    </div>
                    <ul className="list-unstyled m-auto">
                        <li><Card.Text className="text-center fw-bold">{product.title}</Card.Text></li>
                        <li><Card.Text className="text-center ">£{formatThousands((product.price * product.quantity).toFixed(2),",")}</Card.Text></li>
                    </ul>
                </Card.Body>
                <Card.Footer className="d-flex flex-column">
                    <Form className="quantity-control d-flex justify-content-center" onSubmit={updateQuantityForBasketItem}>
                        <button type="button" className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
                        <input id={`${product.id}input`}type="number" min="1" defaultValue={product.quantity} className="text-center"></input>
                        <button type="button" className="btn btn-secondary" onClick={increaseQuantity}>+</button>
                    </Form>
                    <Button type="button" className="mx-auto mt-4 btn negative-button border-0" onClick={removeFromBasket} >Remove from basket </Button>
                </Card.Footer>
            </Card>
        </Col>        
    )
}

export default Product