import NavbarComponent from "./components/NavbarComponent"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"


export const About = () => {
    return (
        <>
            <Container fluid id="about-banner" className="d-flex flex-column justify-content-center align-items-center banner">
                <h1 className="text-light">Empowering people and businesses</h1>
            </Container>

            <Container className="px-5 mt-4" id="aboutTop">
                <h2 className="text-center">Our History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit purus, pharetra nec enim vitae, ultrices malesuada arcu. Sed pulvinar a est eget efficitur. Curabitur ut mollis urna. Nullam ac dolor eu urna blandit placerat nec eget mauris. Morbi libero dui, fermentum et vulputate in, vulputate eu risus. In consequat pulvinar tortor eleifend luctus. Pellentesque congue dui in nibh porttitor porta. Donec molestie ultricies facilisis. Vivamus tincidunt ex id velit rutrum tincidunt. Cras vulputate urna eros, ut luctus leo consequat sit amet. Aliquam ultricies ornare interdum. </p>
                <p>Praesent facilisis, orci et euismod elementum, ligula elit dictum sem, eu varius tortor urna sed arcu. Pellentesque blandit nibh in urna cursus, et iaculis augue commodo. Donec laoreet consectetur lorem sed dignissim. Pellentesque id eros et erat posuere gravida id vel ex. Vivamus dictum, ligula quis volutpat laoreet, diam lorem tristique leo, sed consectetur ante lectus at nisl. Morbi orci nulla, aliquet ac volutpat eget, dictum nec ipsum. Proin volutpat odio quam, a tristique neque aliquam ut. In euismod posuere tristique. Sed molestie tortor eu hendrerit posuere. Pellentesque non porta dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac ligula consequat, posuere ante pretium, lobortis urna. Quisque non accumsan magna. Nunc finibus massa a urna maximus, id fringilla nisi pretium. Ut maximus rutrum lacus eu varius. </p>
            </Container>
        
            <Container className="px-5 mb-5" id="aboutMid">
                <h2 className="text-center">Our Values</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit purus, pharetra nec enim vitae, ultrices malesuada arcu. Sed pulvinar a est eget efficitur. Curabitur ut mollis urna. Nullam ac dolor eu urna blandit placerat nec eget mauris. Morbi libero dui, fermentum et vulputate in, vulputate eu risus. In consequat pulvinar tortor eleifend luctus. Pellentesque congue dui in nibh porttitor porta. Donec molestie ultricies facilisis. Vivamus tincidunt ex id velit rutrum tincidunt. Cras vulputate urna eros, ut luctus leo consequat sit amet. Aliquam ultricies ornare interdum. </p>
                <ListGroup>
                    <ListGroup.Item>We are customer-obsessed.</ListGroup.Item>
                    <ListGroup.Item>We make big bold bets.</ListGroup.Item>
                    <ListGroup.Item>Corporate social responsibility</ListGroup.Item>
                    <ListGroup.Item>Trustworthy Computing</ListGroup.Item>
                    <ListGroup.Item>Passion</ListGroup.Item>
                </ListGroup>
            </Container>
        </>

    )
}

export default About