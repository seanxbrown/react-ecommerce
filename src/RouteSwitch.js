import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import Locations from "./Locations";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/locations" element={<Locations/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch