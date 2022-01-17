import { Col, Container, Image, Row } from "react-bootstrap";
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

import "./HomePage.css";


function HomePage() {

    return (
        <div className="page">
            <Container >
                <Row>
                    <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
                        <Container>
                            <div className="container-box">
                                <div className="text-upper">
                                    <span className="home-text"> hello </span>
                                </div>
                                <div className="image-box">
                                    <Image src="profile_sepia.png" alt="Old Adriane Photo" rounded fluid />
                                </div>
                                <span className="home-text-2"> I'm Adriane </span>
                            </div>
                            <div className="down-arrow-box">
                            <Link className="down-arrow" to="about-page" smooth={true} duration={500}  offset={-100} style={{ cursor: "pointer" }}>
                        <FaAngleDoubleDown  className="down-arrow" size={70} />
                        </Link>
                            </div>
                        
                        </Container>
                        {/* <Link className="down-arrow" to="about-page" smooth={true} duration={500} style={{ cursor: "pointer" }}>
                        <FaAngleDoubleDown  className="down-arrow" size={70} /> 
                        </Link> */}

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;