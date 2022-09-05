import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <BrowserRouter>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/react-ecommerce" element={<Home />} />
        <Route path="/react-ecommerce/about" element={<About />} />
        <Route path="/react-ecommerce/contact" element={<Contact/>} />
        <Route path="/react-ecommerce/shop" element={<Shop/>} />
        <Route path="/react-ecommerce/*" element={<NotFound/>} />      
      </Routes>
    </BrowserRouter>
        
  

  );
}

export default App;
