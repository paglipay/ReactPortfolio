import React, { useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import AvailableTimes from "../AvailableTimes";
import API from "../../utils/API";
import EmployeeDirectory from "../EmployeeDirectory/EmpDirModal";
import VisitorConfirm from "../VisitorConfirm";

function TouchlessLogin(props) {
    
    const [show, setShow] = useState(false);
    const [showEmployeeDirectory, setShowEmployeeDirectory] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [datepickerDisabled, setDatepickerDisabled] = useState(true)
    const [availableTimesList, setavailableTimesList] = useState([])

    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(name, value)
        setDatepickerDisabled(false)
        if (name === 'date') {
            API.getAvailableTimes(value)
                .then(res => setavailableTimesList(res.data))
                .catch(err => console.log(err));
            // setavailableTimesList(['1:00pm', '1:15pm'])
        }
        if (name === 'time') {
            setShow(true)
        }
        //employee
        setFormObject({ ...formObject, [name]: value })

    };

    // When the form is submitted, use the API.saveAppointment method to save the appointment data
    // Then reload appointments from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        // if (formObject.name && formObject.phone && formObject.email && formObject.employee && formObject.date && formObject.time && formObject.info) {
        //   API.saveAppointments({
        //     name: formObject.name,
        //     phone: formObject.phone,
        //     email: formObject.email,
        //     employee: formObject.employee,
        //     // datetime: formObject.datetime,
        //     // date_time: new Date(formObject.date + ' ' + formObject.time),
        //     date: formObject.date,
        //     time: formObject.time,
        //     info: formObject.info
        //   })
        //     .then(res => loadAppointments())
        //     .then(() => setFormObject({
        //       name: '',
        //       phone: '',
        //       email: '',
        //       employee: '',
        //       date:"",
        //       time:"",
        //       // datetime: "",
        //       info: ''
        //     }))
        //     .catch(err => console.log(err));
        // }
    };


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>UUID:{`${props.uuid_id}`}</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmployee">
                                <Form.Label>Meeting with?</Form.Label>
                                <Form.Control type="text" name="employee" placeholder="Enter Name of Person" onChange={handleInputChange} onClick={() => setShowEmployeeDirectory(true)} />
                                <Form.Text className="text-muted">
                                    With whom would you like to set up an appointment with?
                            </Form.Text>
                            </Form.Group>

                            <AvailableTimes datepickerDisabled={datepickerDisabled} availableTimesList={availableTimesList} handleInputChange={handleInputChange} onClick={handleShow} />
                        </Form>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Do you wish to make this appointment?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Your appointment with: {formObject.employee}
                            <br />
                            Is set on: {formObject.date}
                            <br />
                            Do you wish to confirm?
                            <br />
                            A cofirmation email will be sent to: {formObject.email}
                        </p>
                        <VisitorConfirm uuid_id={props.uuid_id} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => {
                            handleClose();
                            const baseurl = window.location.href
                            console.log('baseurl: ', baseurl)
                            if (baseurl.includes('lobbylogin')) {
                                return null
                            } else {
                                window.location.replace(`${window.origin}/visitorconfirm/${props.uuid_id}`);
                            }
                        }}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
                <EmployeeDirectory show={showEmployeeDirectory} setShow={setShowEmployeeDirectory} />
            </Container>
        </>
    )
}

export default TouchlessLogin
