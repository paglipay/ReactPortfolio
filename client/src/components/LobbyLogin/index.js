import React, { useState, useEffect, useRef } from 'react';
import { Button, Tab, Col, Row, Nav, Container, Form, Card } from 'react-bootstrap';
// import "./App.css";
import LLModal from "./components/LLModal";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from 'uuid';
import io from "socket.io-client";

function ModalPage() {
    const [yourID, setYourID] = useState("");
    const [users, setUsers] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [uuid_id, setUuid_id] = useState()
    const socket = useRef();

    useEffect(() => {
        setUuid_id(uuidv4())
        socket.current = io.connect("/");

        socket.current.on("yourID", (id) => {
            setYourID(id);
            console.log('socket_id:', id)
        })
        socket.current.on("allUsers", (users) => {
            setUsers(users);

            setUuid_id(uuidv4())
            console.log('users:', users)
        })
        socket.current.on("userDisconnect", (users) => {
          console.log('userDisconnect: ', users)
          console.log(users)
          setUsers(users);
        })

    }, []);

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

                            <h1>UUID:{`${uuid_id}`}</h1>
                            <a href={`${window.origin}/touchlesslogin/${uuid_id}`}>
                                <QRCode value={`${window.origin}/touchlesslogin/${uuid_id}`} />
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <LLModal show={show} handleClose={handleClose} uuid_id={uuid_id} />
        </Container >
    );
}


export default ModalPage;