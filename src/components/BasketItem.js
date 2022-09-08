import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup"


const Product = ({ product, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }) => {
    return (
        <Card className="product border-info border-3 border justify-content-evenly" id={product.id} >
            <Card.Body>
                <Card.Img className="product-image" src={product.image} variant="top"></Card.Img>
                <ul className="list-unstyled m-auto">
                    <li><Card.Text className="text-center fw-bold">{product.title}</Card.Text></li>
                    <li><Card.Text className="text-center ">£{(product.price * product.quantity).toFixed(2)}</Card.Text></li>
                </ul>
            </Card.Body>
            <Card.Footer>
            <div className="quantity-control d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
                    <input type="number" defaultValue={product.quantity}></input>
                    <button type="button" className="btn btn-secondary" onClick={increaseQuantity}>+</button>
                </div>
            </Card.Footer>
            <Button type="button" className="m-0 btn btn-danger" onClick={removeFromBasket} >Remove from basket </Button>
        </Card>
    )
}

export default Product