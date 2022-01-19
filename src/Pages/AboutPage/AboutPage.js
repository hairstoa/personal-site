import { Col, Container, Image, Row } from "react-bootstrap";

import "./AboutPage.css";

function AboutPage() {
 
    return (
        <div className="page" id="about-page">
        <Container fluid >
        {/* <Container fluid id="about-page" style={{height: height}}> */}
            <Row>
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} >
                    <h1> About </h1>
                    <p>
                    Adriane is a developer born and raised in Pittsburgh, PA. 
                    In December 2021, she graduated from Oregon State University with a Bachelor's of Computer Science Degree. 
                    She began programming through a curiosity in open source software that improves the qualities of people’s lives at no additional cost.
                    Another interest is developing software that raises environmental awareness and helps people interact with the planet more consciously.
                    Adriane was part of a small team that won the BeaverHacks Fall 2021 Hackathon focused on climate/energy with a drought tracking web application.
                    </p>
                    <p>
                    She also has an affinity for drawing and earned a Bachelor of Fine Arts from Tyler School of Art, Temple University in Philadelphia.
                    The children's book she illustrated, "Have You Seen Green?" by Keith Canedo, was published in 2020 and it encourages environmental activism.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col  xs={{ span: 4, offset: 4}} md={{ span: 4, offset: 4 }} xl={{ span: 2, offset: 5}}>
                    <Image src="keyboard.svg" fluid></Image>
                </Col>
            </Row>
        </Container>
        </div>


    );
}

export default AboutPage;