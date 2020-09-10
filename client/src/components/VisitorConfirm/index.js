import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import QRCode from "react-qr-code";

function App() {
    return (
        <Container fluid>
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
  
            <a href={`${window.origin}/visitorconfirm/1`}>
              <QRCode value={`${window.origin}/visitorconfirm/1`} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    )
}

export default App
