import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [appointment, setAppointment] = useState({})

  // When this component mounts, grab the appointment with the _id of props.match.params.id
  // e.g. localhost:3000/appointments/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getAppointment(id)
      .then(res => setAppointment(res.data))
      .catch(err => console.log(err));
  }, [])
// 
  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {appointment.name} - {appointment.phone} - {appointment.email} - {appointment.employee} - {appointment.date}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Meeting Information</h1>
              <p>
                {appointment.info}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
