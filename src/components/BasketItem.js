import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup"


const Product = ({ product, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }) => {
    return (
        <Card className="product border-info border-3 border justify-content-evenly" id={product.id} >
            <Card.Body>
                <div class="product-img-div my-3">
                    <Card.Img className="product-image" src={product.image} variant="top"></Card.Img>
 
                </div>
                <ul className="list-unstyled m-auto">
                    <li><Card.Text className="text-center fw-bold">{product.title}</Card.Text></li>
                    <li><Card.Text className="text-center ">£{(product.price * product.quantity).toFixed(2)}</Card.Text></li>
                </ul>
            </Card.Body>
            <Card.Footer className="d-flex flex-column">
            <div className="quantity-control d-flex justify-content-center">
                    <button type="button" className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
                    <input type="number" defaultValue={product.quantity}></input>
                    <button type="button" className="btn btn-secondary" onClick={increaseQuantity}>+</button>
                </div>
                <Button type="button" className="mx-auto mt-4 btn btn-danger" onClick={removeFromBasket} >Remove from basket </Button>

            </Card.Footer>
        </Card>
    )
}

export default Product