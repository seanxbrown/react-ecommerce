import BasketItem from "./BasketItem";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react"

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
        <Container className="p-5">
            <Row md={3} className="border border-1 border-dark p-5 g-3 align-items-stretch">
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
            : <h2 className="text-center">No items in basket</h2>}
            </Row>
            <h3>Subtotal: £{subtotal}</h3>
        </Container>
        
    )
}



export default Basket
