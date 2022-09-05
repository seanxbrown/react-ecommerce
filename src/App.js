import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
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
  const [products, setProducts] = useState([{id: 1, name: "product 1", price: 1999, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop1.png"},{id: 2, name: "product 2", price: 1519, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop2.png"},{id: 3, name: "product 3", price: 1022, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop3.jpg"},{id: 4, name: "product 4", price: 500, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop4.jpg"},{id: 5, name: "product 5", price: 2098, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop5.jpg"},{id: 6, name: "product 6", price: 4230, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id rhoncus velit. Nam interdum cursus nibh, non auctor tellus bibendum.", image: "laptop6.jpg"}])

    
    function addToBasket() {
        setBasket(basket.concat({test: "obj"}))
    }
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
