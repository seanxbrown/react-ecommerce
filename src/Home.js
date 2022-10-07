import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"

const Home = () => {

    return (
      <>
      <Container fluid id="hero-banner" className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-light">Technology that powers the future</h1>
      </Container>
      <Container fluid className="mb-5 mt-4" >
          <h2 className="text-dark text-center">Changing lives through innovation</h2>
          <Row xs={1} lg={3}>
            <Card>
              <Card.Header>
                Innovation
              </Card.Header>
              <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas erat id quam pulvinar faucibus. Praesent imperdiet laoreet urna, in pretium ex luctus interdum. Maecenas non tempor magna. In vel. 
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Sustainability
              </Card.Header>
              <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas erat id quam pulvinar faucibus. Praesent imperdiet laoreet urna, in pretium ex luctus interdum. Maecenas non tempor magna. In vel. 
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Quality 
              </Card.Header>
              <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas erat id quam pulvinar faucibus. Praesent imperdiet laoreet urna, in pretium ex luctus interdum. Maecenas non tempor magna. In vel. 
              </Card.Body>
            </Card>
          </Row>
      </Container>
      <Container fluid id="earth-section" className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-light">Connecting people</h1>
      </Container>
      

      </>
        
          
    
    )

}

export default Home
