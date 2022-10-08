import NavbarComponent from "./components/NavbarComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Contact = () => {
    return (

        <>
            <Container fluid id="earth-section" className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-light">Contact Us</h1>
             </Container>
             <Container className="mt-0 py-4 mb-5">
                <h2 className="text-center">Locations</h2>
                <Row xs={1} md={3}>
                    <Card bg="secondary" border="light" className="text-light">
                        <Card.Body>
                        <Card.Header className="text-center">London</Card.Header>
                        <Card.Text>27 Maiden Ln</Card.Text>
                        <Card.Text>Covent Garden</Card.Text>
                        <Card.Text>London</Card.Text>
                        <Card.Text>WC2E 7JS</Card.Text>
                        <Card.Text>+44 20 7836 2292</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="secondary" border="light" className="text-light">
                        <Card.Body>
                        <Card.Header className="text-center">New York</Card.Header>
                        <Card.Text>2200 Central Ave SE</Card.Text>
                        <Card.Text>Albuquerque</Card.Text>
                        <Card.Text>New York</Card.Text>
                        <Card.Text>87106</Card.Text>
                        <Card.Text>+1 505 265-2750</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="secondary" border="light" className="text-light">
                        <Card.Body>
                        <Card.Header className="text-center">Tokyo</Card.Header>
                        <Card.Text>147-1246, Kyojima</Card.Text>
                        <Card.Text>Sumida-ku</Card.Text>
                        <Card.Text>Tokyo</Card.Text>
                        <Card.Text>116-0002</Card.Text>
                        <Card.Text>+81 74-952-7093</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>  
             </Container>

        </>
    )
}

export default Contact