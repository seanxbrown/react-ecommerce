import BasketItem from "./BasketItem";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Checkout from "./Checkout";
import formatThousands from "format-thousands";

const Basket = ( {numberOfItems, removeAllFromBasket, updateQuantityForBasketItem, basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity} ) => {
    const [subtotal, setSubtotal] = useState(0);
    const [displayCheckout, setDisplayCheckout] = useState(false);

    function showCheckout() {
        setDisplayCheckout(true);
    }

    function hideCheckout() {
        setDisplayCheckout(false);
    }

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
        <>
        <Checkout hideCheckout={hideCheckout} displayCheckout={displayCheckout} numberOfItems={numberOfItems} subtotal={subtotal}/>
        <Container className="mt-5 pb-5 vh-100 overflow-scroll">
            <Row xs={1} md={2} lg={3} className="g-3 pb-5 mt-4">
            {basket.length > 0 ? basket.map(itemInBasket => {
                return <BasketItem 
                key={Math.random() * 100000} 
                product={itemInBasket} 
                decreaseQuantity={decreaseQuantity} 
                increaseQuantity={increaseQuantity} 
                addToBasket={addToBasket} 
                removeFromBasket={removeFromBasket}
                updateQuantityForBasketItem={updateQuantityForBasketItem}
                removeAllFromBasket={removeAllFromBasket} >
                </BasketItem>
            })
            : <Alert variant="dark" className="text-center mx-auto">No items in basket</Alert>}
            </Row>
            <Row className="g-2">
                <Col xs={12} lg={6}><h3 className="">Subtotal: £{basket.length === 0 ? 0 : formatThousands(subtotal.toFixed(2), ",")}</h3></Col>
                <Col xs={12} lg={3} className=""><Button type="button" className="btn positive-button w-100" onClick={showCheckout}>Checkout</Button></Col>
                <Col xs={12} lg={3}><Button type="button" className="btn negative-button border-0 w-100" onClick={removeAllFromBasket}>Remove all</Button></Col>
            </Row>
        </Container>
        </>
        
        
    )
}



export default Basket
