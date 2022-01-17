import { Col, Container, Image, Row } from "react-bootstrap";
import { ContactForm } from "../../Components";

import "./ContactPage.css";

function ContactPage() {

    return (
        <div className="contact-page" id="contact-page">
        <Container >
            <Row>
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <h1> Contact </h1>
                    < ContactForm />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} lg={{ span: 2, offset: 5}}>
                <Image src="Nyoki_pup.svg" className="pupImage" fluid></Image>
                </Col>
            </Row>
        </Container>
        </div>


    );
}

export default ContactPage;