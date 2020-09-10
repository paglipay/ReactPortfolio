import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function EmployeeModal({ name, phone, email, employee, date, time, info }) {
  const [show, setShow] = React.useState(false);

  return (
    <>

      <a href="#" onClick={() => { setShow(true) }}>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-sm-2">
              <img className="card-img" src="https://randomuser.me/api/portraits/women/21.jpg" alt="Suresh Dasari Card" style={{height:"150px" , width:"150px"}} />
            </div>
            <div className="col-sm-10">
              <div className="card-body">
              <h5 class="card-title">{name}</h5>
                        <p class="card-text">{info}</p>
                <a href="#" className="btn btn-primary" style={{color:"white"}} >View App Details</a>
              </div>
            </div>
          </div>
        </div>



      </a>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Meeting Info - Confimation Code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li> Name: {name}</li>
            <li> Phone: {phone}</li>
            <li> Email: {email}</li>
            <li> Meeting with: {employee}</li>
            <li> Date :{date}</li>
            <li> Time :{time}</li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EmployeeModal;
