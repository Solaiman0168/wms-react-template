import React from 'react';
import logo from './logo.png';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#solution">Solution</Nav.Link>
              <Nav.Link href="#support">Support</Nav.Link>
          </Nav>
          <Form inline>
              <Nav.Link href="#sign-in">Sign In</Nav.Link>
              <Nav.Link href="#sign-up">Sign Up</Nav.Link>
              <Nav.Link href="#search-button"><FontAwesomeIcon icon="search" /></Nav.Link>
              {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
              {/*<Button variant="outline-info">Search</Button>*/}
          </Form>
      </Navbar>
  );
}

export default App;
