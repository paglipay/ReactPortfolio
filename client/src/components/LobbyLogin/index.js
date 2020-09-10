import React, { useState } from 'react';
import { Button, Tab, Col, Row, Nav, Container, Form, Card } from 'react-bootstrap';
// import "./App.css";
import LLModal from "./components/LLModal";
import QRCode from "react-qr-code";

function ModalPage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>            
    <style type="text/css">
        {`
        .modal-90w {
                width: 90%;
                max-width: none!important;
            }

            body {
                color: rgba(0, 0, 0, 0.63);
                /* The image used */
                background-image: url('https://source.unsplash.com/1600x900/?city,dark');
                position:relative;
                /* opacity:0.10; */
                background-position:center;
                background-size:cover;
                background-repeat:no-repeat;
                background-attachment:fixed;
            }
        `}
    </style>
            <Row >
                
            <Col>
                    <Card style={{ paddingTop: '15px', height: '100%' }}>
                        <Card.Body>
                            <Card.Title>I have an Appointment!</Card.Title>
                            <Card.Text>
                                Knowlegable in HTML, Javascript, CSS, Nodejs, Sequelize, and much much more!!!
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow}>
                                Start
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ paddingTop: '15px', height: '100%' }}>
                        {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" className="center" /> */}
                        <Card.Body>
                            <Card.Title>I do not have an appointment...</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                            <Button variant="primary" onClick={handleShow}>
                                Start
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ paddingTop: '15px', height: '100%' }}>
                        {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" /> */}
                        <Card.Body>
                            <Card.Title>Let's Get In Touch!</Card.Title>
                            <Card.Text>
                                Ready to start your next project with me? Give me a call or send me an email and I will get back to you as soon as possible!
                            </Card.Text>

                            <a href={`/touchlesslogin/1`}>
                                <QRCode value={`/touchlesslogin/1`} />
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <LLModal show={show} handleClose={handleClose} />
        </Container >
    );
}


export default ModalPage;