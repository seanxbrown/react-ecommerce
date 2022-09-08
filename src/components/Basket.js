import BasketItem from "./BasketItem";
import Row from "react-bootstrap/Row"

const Basket = ( {basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity} ) => {
    return (
        <Row md={2} className="p-5 g-3">
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
    )
}

export default Basket