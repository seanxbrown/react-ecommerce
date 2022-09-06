import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import NotFound from "./NotFound";
import { NavbarComponent } from "./components/NavbarComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([])

    
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
            product.quantity = product.quantity + 1
        }
        setBasket(newBasket)

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
  return (
    <BrowserRouter>
      <NavbarComponent numberOfItems={basket.length}></NavbarComponent>
      <Routes>
        <Route path="/react-ecommerce" element={<Home />} />
        <Route path="/react-ecommerce/about" element={<About />} />
        <Route path="/react-ecommerce/contact" element={<Contact/>} />
        <Route path="/react-ecommerce/shop" element={<Shop addToBasket={addToBasket} products={products}/>} />
        <Route path="/react-ecommerce/*" element={<NotFound/>} />      
      </Routes>
    </BrowserRouter>
        
  

  );
}

export default App;
