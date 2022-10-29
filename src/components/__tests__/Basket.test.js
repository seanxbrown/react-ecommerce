import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Basket from "../Basket"

const testObj = {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    },
    "quantity": 5
  }

test("Information message displayed when basket is empty", () => {
    render(<Basket basket={[]}/>);
    const infoMessage = screen.getByText(/No items in basket/i);
    expect(infoMessage).toBeInTheDocument()
})

test("Display certain product information of basket item", () => {
    render(<Basket basket={[testObj]}/>);
    const {title, price, quantity} = testObj;
    const titleText = screen.getByText(title)
    const priceText = screen.getByText(`£${price * quantity}.00`)

    expect(titleText).toBeInTheDocument()
    expect(priceText).toBeInTheDocument()

})