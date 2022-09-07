import BasketItem from "./BasketItem";
import Row from "react-bootstrap/Row"

const Basket = ( {basket, addToBasket, removeFromBasket} ) => {
    return (
        <Row md={2} className="p-5 g-3">
            {basket.map(itemInBasket => {
                return <BasketItem key={Math.random() * 100000} product={itemInBasket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} ></BasketItem>
            })}
        </Row>
    )
}

export default Basket