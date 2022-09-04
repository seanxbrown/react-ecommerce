import "./assets/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponent} from "./components/NavbarComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function App() {
  return (<>
        <NavbarComponent></NavbarComponent>
        <Container fluid className="App">
          <Row id="hero-banner">
            <h1>Technology that powers the future</h1>
          </Row>
        </Container>

  </>

  );
}

export default App;
