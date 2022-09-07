import BasketItem from "./BasketItem";
import Row from "react-bootstrap/Row"

const Basket = ( {basket, addToBasket, removeFromBasket, increaseQuantity} ) => {
    return (
        <Row md={2} className="p-5 g-3">
            {basket.map(itemInBasket => {
                return <BasketItem key={Math.random() * 100000} product={itemInBasket} increaseQuantity={increaseQuantity} addToBasket={addToBasket} removeFromBasket={removeFromBasket} ></BasketItem>
            })}
        </Row>
    )
}

export default Basket