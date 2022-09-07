import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Product = ({ product, addToBasket, removeFromBasket, increaseQuantity }) => {
    return (
        <Card className="product border-info border-3 border justify-content-evenly" id={product.id} >
            <Card.Body>
                <Card.Img className="product-image" src={product.image}></Card.Img>
                <ul className="list-unstyled m-auto">
                    <li><Card.Text className="text-center fw-bold">{product.title}</Card.Text></li>
                    <li><Card.Text className="text-center ">£{product.price * product.quantity}</Card.Text></li>
                </ul>
                <div className="quantity-control d-flex m-auto justify-content-center">
                    <button type="button" className="btn btn-secondary">-</button>
                    <input type="number" defaultValue={product.quantity}></input>
                    <button type="button" className="btn btn-secondary" onClick={increaseQuantity}>+</button>
                </div>
            </Card.Body>
            <Button type="button" className="m-4" onClick={addToBasket}>Add to basket</Button>
            <Button type="button" className="m-4 btn btn-danger" onClick={removeFromBasket} >Remove from basket </Button>
        </Card>
    )
}

export default Product