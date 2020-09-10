import React from 'react'
import { Button, Modal } from "react-bootstrap";
import App from './App'
function EmpDirModal(props) {

    return (
        <><style type="text/css">
        {`
        .modal-90w {
                width: 90%;
                max-width: none!important;
            }
        `}
    </style>
            <Modal
                show={props.show}
                onHide={() => props.setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <App />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EmpDirModal
