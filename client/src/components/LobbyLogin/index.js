import React, { useState } from 'react';
import { Modal, Button, Tab, Col, Row, Nav, Container, Form, Card } from 'react-bootstrap';
import QRCode from "react-qr-code";
// import Todo from "../../Todo/App";
import EmployeeDirectory from "../EmployeeDirectory/App";
import VideoChat from "../VideoChat";
import ModalChat from "../Chat/ModalChat";
import ReactVideoChat from "../ReactVideoChat/App";
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
                        <i class="large material-icons divicon">directions_car</i>
                        <Card.Body>
                            <Card.Title>Let's Get In Touch!</Card.Title>
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
                            <Card.Title>At Your Service</Card.Title>
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
                    <Card style={{ paddingTop: '15px', height: '100%' }} float="center">
                        {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" /> */}
                        <Card.Body>
                            <Card.Title>Go Touchless!</Card.Title>
                            <Card.Text>
                                Ready to start your next project with me? Give me a call or send me an email and I will get back to you as soon as possible!
                            </Card.Text>
                            <QRCode value="https://paglipay-reactportfolio.herokuapp.com/" />

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Please Sign In</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Search Directory</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Col>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter full name" />
                                                        <Form.Text className="text-muted">
                                                        </Form.Text>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit">
                                                        Submit
                                                    </Button>
                                                </Form>
                                                
                                        <EmployeeDirectory />
                                            </Col>
                                            <Col>
                                                <Card>
                                                    <Card.Header>Featured</Card.Header>
                                                    <Card.Body>
                                                        <ReactVideoChat />
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ModalChat />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    );
}


export default ModalPage;