import { Button, Container, Form } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.png";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
// bg="dark"
function Navigationbar(props) {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <Navbar
      expand="lg"
      data-bs-theme={props.mode}
      // fixed="top"
      className="bg-body-tertiary bg-dark "
    >
      <Container>
        <Navbar.Brand>
          <Link style={linkStyle} to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block "
              alt="React Bootstrap logo"
              style={{ zIndex: "0" }}
            />
            {props.title}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={linkStyle} to="/">
              {props.homeText}
            </Link>
            <Link style={linkStyle} to="/about">
              {props.aboutText}
            </Link>

            {/* <Nav.Link to="/">{props.homeText}</Nav.Link>
          <Nav.Link to="/about">{props.aboutText}</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-success">Search </Button>
          </Form>

          <Form className={`d-flex ${props.mode} ms-3`}>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="mode"
              onClick={props.toggleMode}
              className={props.textStyle}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
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
