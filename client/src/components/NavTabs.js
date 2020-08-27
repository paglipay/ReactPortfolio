import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Paul Aglipay</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/todo">Todo</Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/modalpage">Application</Nav.Link>
          <Nav.Link href="/employeedirectory">Directory</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      
    </>
  );
}

export default NavTabs;
