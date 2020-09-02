import React, { useState, useEffect } from "react";
import { Modal, Button, Spinner } from 'react-bootstrap';
import io from "socket.io-client";
import queryString from 'query-string';

// import Chat from '../Chat/components/Chat/Chat';
// import Join from '../Chat/components/Join/Join';

let socket;

function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        console.log('MyVerticallyCenteredModal')
        socket = io(ENDPOINT);
        setRoom('paul2');
        setName('paul2')
        socket.emit('join', { name, room }, (error) => {
            if(error) {
              alert(error);
            }
          });
    }, []);


    const callRoom = (id) => {
        console.log(props)
        const msg = 'hi'
        socket.emit('message', { msg, room });
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // dialogClassName="modal-90w"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Spinner animation="border" variant="primary" />
<br/>
                <Button onClick={() => { callRoom(1)}}>MSG</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function VideoChat() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <style type="text/css">
                {`
                .modal-90w {
                        width: 90%;
                        max-width: none!important;
                    }
                `}
            </style>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Video Chat
        </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
