import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import NotFound from "./NotFound";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
    
  function addToBasket(e) {
    const productSelectedInShop = e.target.parentElement.id;
    const productToAddToBasket = products.filter(product => product.id === Number(productSelectedInShop))[0];


    //If the product is not in the basket, add it


    if(!basket.includes(productToAddToBasket)) {
      productToAddToBasket.quantity = 1;

      const newBasket = [...basket].concat(productToAddToBasket);
      setBasket(newBasket)
    } else {
      const newBasket = [...basket];
        for (let product of newBasket) {
          if (product.id === productToAddToBasket.id)
          product.quantity++
      }
      setBasket(newBasket)

    }

  }

  function removeFromBasket(e) {
    const IDofProductSelectedInBasket = e.target.parentElement.parentElement.id;
    const newArrayOfBasketItems = [...basket].filter(product => product.id !== Number(IDofProductSelectedInBasket));
    setBasket(newArrayOfBasketItems)

    
  }

  function increaseQuantity(e) {
    const IDofProductSelectedInBasket = e.target.parentElement.parentElement.parentElement.id;


    const newBasket = [...basket];
        for (let product of newBasket) {
          if (product.id === Number(IDofProductSelectedInBasket))
          product.quantity++
      }
      setBasket(newBasket)

  }

  function decreaseQuantity(e) {
    const IDofProductSelectedInBasket = e.target.parentElement.parentElement.parentElement.id;
    let newBasket = [...basket];
    
        for (let product of newBasket) {
          if (product.id === Number(IDofProductSelectedInBasket)) {
            if (product.quantity > 1) {
              product.quantity--
              setBasket(newBasket)
            } else { 
              newBasket = newBasket.filter(product => product.id !== Number(IDofProductSelectedInBasket));
              setBasket(newBasket)

            }
          }
      }

  }

  function updateQuantityForBasketItem(e) {
    e.preventDefault();
    const IDofProductToChange = e.target.parentElement.parentElement.id;
    const basketItemInputField = document.getElementById(`${IDofProductToChange}input`);

    if (basketItemInputField.value < 1) {
      basketItemInputField.value = ""
      return
    }

    const newBasket = [...basket];
    for (let product of newBasket) {
      if (product.id === Number(IDofProductToChange)) {
        product.quantity = Number(basketItemInputField.value);
        setBasket(newBasket)
      }
    }

  }


  useEffect(() => {
    async function getProductsData() {

      const response = await fetch("https://fakestoreapi.com/products/category/electronics", {mode: "cors"});
      const data = await response.json();
      setProducts(products.concat(data))

    }

    getProductsData()

  }, [])

  useEffect(() => {

    if (basket.length > 0) {
      const basketItemQuantity = basket.map(item => item.quantity).reduce((acc, cur) => acc + cur);
      setNumberOfItems(basketItemQuantity)

    }


  }, [basket])



  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <NavbarComponent basket={basket} numberOfItems={numberOfItems}></NavbarComponent>
        <Routes>
          <Route path="/react-ecommerce" element={<Home />} />
          <Route path="/react-ecommerce/about" element={<About />} />
          <Route path="/react-ecommerce/contact" element={<Contact/>} />
          <Route path="/react-ecommerce/shop" element={<Shop addToBasket={addToBasket} products={products}/>} />
          <Route path="/react-ecommerce/basket" element={<Basket updateQuantityForBasketItem={updateQuantityForBasketItem} basket={basket} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} addToBasket={addToBasket} removeFromBasket={removeFromBasket}
          />} />      
          <Route path="/react-ecommerce/*" element={<NotFound/>} />      
        </Routes>
        <Footer />
      </Container>
      
    </BrowserRouter>
        
  

  );
}

export default App;
