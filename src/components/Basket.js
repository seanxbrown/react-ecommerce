import BasketItem from "./BasketItem";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert"

const Basket = ( {basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity} ) => {
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {

        function calculateSubtotal() {
            if(basket.length > 0) {

                let newSubtotal = basket.map(item => item.quantity * item.price).reduce((acc, cur) => acc + cur)
                setSubtotal(newSubtotal)
            }
        }

        calculateSubtotal()
        

    }, [basket])




    return (
        <Container fluid className="mt-5 pb-5">
            <Row xs={1} lg={3} className="g-3 pb-5">
            {basket.length > 0 ? basket.map(itemInBasket => {
                return <BasketItem 
                key={Math.random() * 100000} 
                product={itemInBasket} 
                decreaseQuantity={decreaseQuantity} 
                increaseQuantity={increaseQuantity} 
                addToBasket={addToBasket} 
                removeFromBasket={removeFromBasket} >
                </BasketItem>
            })
            : <Alert variant="dark" className="text-center mx-auto">No items in basket</Alert>}
            </Row>
            <h3>Subtotal: £{subtotal}</h3>
        </Container>
        
    )
}



export default Basket
