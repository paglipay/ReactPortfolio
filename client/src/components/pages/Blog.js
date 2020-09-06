import React, { useEffect, useState, useRef } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Form, Button } from 'react-bootstrap'
function Blog() {

  const [state, setState] = useState({
    date: new Date(),
  })

  const onChange = date => setState({ date })

  return (
    <div>
      <h1>Blog Page</h1>
      <DateTimePicker
        onChange={onChange}
        value={state.date}
      />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="date" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="time" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
        turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
        Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
        nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi
        justo laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum
        tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque
        vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus
        non ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
    </div>
  );
}

export default Blog;
