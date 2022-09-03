import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Locations from "./Locations";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react-ecommerce" element={<App />}/>
                <Route path="/react-ecommerce/about" element={<About />} />
                <Route path="/react-ecommerce/contact" element={<Contact/>} />
                <Route path="/react-ecommerce/locations" element={<Locations/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch