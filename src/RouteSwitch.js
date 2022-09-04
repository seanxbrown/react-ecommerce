import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import NotFound from "./NotFound";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react-ecommerce" element={<App />}/>
                <Route path="/react-ecommerce/about" element={<About />} />
                <Route path="/react-ecommerce/contact" element={<Contact/>} />
                <Route path="/react-ecommerce/shop" element={<Shop/>} />
                <Route path="/react-ecommerce/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch