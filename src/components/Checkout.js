import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton"
import {useEffect} from "react";
import formatThousands from "format-thousands";


function Checkout({ numberOfItems, subtotal, displayCheckout, hideCheckout }) {

    useEffect(() => {
        const checkoutBox = document.getElementById("checkoutBox");

        if (displayCheckout) {
            checkoutBox.classList.add("displayCheckout")
        } else {
            checkoutBox.classList.remove("displayCheckout")
        }
    }, [displayCheckout])


    return (
        <aside id="checkoutBox" className="border-0 text-light">
            <div id="checkoutBoxHeader" className="d-flex justify-content-between ms-4 mt-2">
                <h4>Checkout</h4>
                <CloseButton onClick={hideCheckout}/>
            </div>
            <div id="orderDetails" className="ms-4">
            <p>Your order total: £{formatThousands(subtotal.toFixed(2), ",")}</p>
            <p>Number of items: {formatThousands(numberOfItems, ",")}</p>
            <p>Standard delivery (4-5 days): £2.99</p>
            <p>Total: £{formatThousands((subtotal + 2.99).toFixed(2), ",")}</p>

            </div>
            
            <Button type="button" id="deliveryButton" className="btn positive-button border-0 p-3 mb-4 ms-4">Delivery options</Button>

        </aside>
    )
}

export default Checkout