import React from "react";
// import ChartsPage from '../MDB/ChartsPage/ChartsPage'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
// import { MDBIcon } from "mdbreact";
// import BasicTable from '../MDB/BasicTable/BasicTable'
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <section class="section section-icons grey lighten-4 center">
        <Container>
          <Row>
            <Col>
              {/* <ChartsPage /> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              {/* <BasicTable /> */}
            </Col>
            <Col xs={12} md={4}>
              <Card style={{ paddingTop: '15px' }}>
                {/* <MDBIcon style={{ textAlign: 'center' }} icon="camera-retro" size="5x" /> */}
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default About;
