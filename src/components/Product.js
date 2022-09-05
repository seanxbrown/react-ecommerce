import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Product = ({ product, addToBasket }) => {
    return (
        <Card className="product" id={product.id} >
            <Card.Body>
                <Card.Img className="product-image" src={require(`../assets/${product.image}`)}></Card.Img>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>{product.price} </Card.Text>
                <Card.Text>{product.description} </Card.Text>
            </Card.Body>
            <Button type="button" onClick={addToBasket}>Add to cart</Button>
        </Card>
    )
}

export default Product