import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import QRCode from "react-qr-code";
import { Button } from 'react-bootstrap';


function App(props) {

  return (
    <Container fluid>

      <style type="text/css">
        {`
        .btn-xl {
          padding: 10px 20px;
          font-size: 20px;
          border-radius: 10px;
          width:350;    //Specify your width here
          height:350;    //Specify your width here
      }
        `}
      </style>


      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {/* {book.title} by {book.author} */}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Synopsis</h1>
            <p>
              {/* {book.synopsis} */}
            </p>
          </article>          
          <h1>UUID:{`${props.uuid_id}`}</h1>
          <a href={`${window.origin}/visitorconfirm/${props.uuid_id}`}>
            <QRCode value={`${window.origin}/visitorconfirm/${props.uuid_id}`} />
          </a>

        </Col>
      </Row>
      <br />
      <Row>
        <Col size="md-6" className="mt-5">
          <Button variant="success" className="btn-xl">Check In Now!</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App
