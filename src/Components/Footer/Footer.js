import React, { Component } from 'react';
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { FaDog, FaGithub, FaHeart, FaInstagram, FaRegAddressCard } from 'react-icons/fa';
import "./Footer.css";

// const Footer = (props) => {
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { nyModal : false }
    }

    toggleModal() {
        if (this.state.nyModal === false){
            this.setState({ nyModal: true });
        } else {
            this.setState({ nyModal: false });
        }
      }

    render() {
        return (
            <footer>
                <Container fluid>
                    <Row>
                        <Col>
                            <Button className="social" href="https://github.com/hairstoa"  target="_blank" variant="outline-warning">
                                <FaGithub />
                            </Button>
                            <Button className="social" href="https://docs.google.com/document/d/1D1_MJn4Uh-ybGnBQVR1kK0jWmYpgXE3a2lrX38zbarc/edit?usp=sharing"  target="_blank" variant="outline-warning">
                                <FaRegAddressCard />
                            </Button>
                            <Button className="social" href="https://www.instagram.com/tinysnackghost" target="_blank" variant="outline-warning">
                                <FaInstagram />
                            </Button>
                            <Button className="social" onClick={() => this.toggleModal()} variant="outline-warning">
                                <FaDog />
                            </Button>
                            <Modal
        size="sm"
        show={this.state.nyModal}
        onHide={() => this.toggleModal()}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Nyoki wants to play!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src="nyoki_play.png" alt="Nyoki Pup with ball" fluid />
        </Modal.Body>
      </Modal>
                        </Col>
                    </Row>
                </Container>
                <br />
                Made with <FaHeart /> in PGH 2021.
            </footer>
        );
    }
}

// export default Footer;