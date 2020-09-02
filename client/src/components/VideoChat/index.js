import React, { useState, useEffect } from "react";
import { Modal, Button, Spinner } from 'react-bootstrap';
import io from "socket.io-client";
import queryString from 'query-string';
import Messages from '../Chat/components/Messages/Messages';
import Input from '../Chat/components/Input/Input';
import InfoBar from '../Chat/components/InfoBar/InfoBar';
import Join from '../Chat/components/Join/Join';

// import Chat from '../Chat/components/Chat/Chat';
// import Join from '../Chat/components/Join/Join';

let socket;

function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState('guest ' + Math.floor(Math.random() * 1000));
    const [room, setRoom] = useState('lobby');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:3001';

    useEffect(() => {
        console.log('MyVerticallyCenteredModal')
        socket = io(ENDPOINT);
        setRoom(room);  
        setName(name)
        socket.emit('join', { name:name, room:room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT]);

    useEffect(() => {
        socket.on('message', message => {
            console.log('message: ' + message)
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    useEffect(() => {
        if (!message) {
          return;
        }
        console.log(message)
      }, [message]);

    const sendMessage = (event) => {
        console.log('sendMessage')
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
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
                    Welcome to Paglipay, How may I help you?
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* <InfoBar room={room} /> */}
                {/* <Spinner animation="border" variant="primary" /> */}
                {!name &&
                <>
                <Join />
                </>
                }
                {name &&
                <>
                <Messages messages={messages} name={name} />
                <br />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    setMessages([]);
                    props.onHide()
                    }}>Close</Button>
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
