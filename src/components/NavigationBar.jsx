import { Button, Form } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../logo.png";
import propTypes from "prop-types";

function Navigationbar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* <Container> */}
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        {props.title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">{props.homeText}</Nav.Link>
          <Nav.Link href="#link">{props.aboutText}</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Navigationbar;

// this will validate the values are sent are valid to context or not
// check in console to find any type of error related to it
Navigationbar.propTypes = {
  title: propTypes.string,
  aboutText: propTypes.string,
  homeText: propTypes.string,
};

// use this to set default value
Navigationbar.defaultProps = {
  title: "Title Missing",
  aboutText: "about Missing",
  homeText: "Hometext Missing",
};
