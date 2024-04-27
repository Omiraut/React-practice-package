import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [buttonText, setButtonText] = useState("Turn Light");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Trun Dark");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setButtonText("Trun Light");
    }
  };

  return (
    <Container>
      <div style={myStyle} className="text-center ">
        <h2 className="my-3">About Us </h2>
      </div>
      <div>
        <Accordion style={myStyle} defaultActiveKey="0">
          <Accordion.Item style={myStyle} eventKey="0">
            <Accordion.Header style={myStyle}>
              Accordion Item #1
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={myStyle} eventKey="1">
            <Accordion.Header style={myStyle}>
              Accordion Item #2
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="text-center">
        <Button variant="danger" onClick={toggleStyle} className="my-3">
          {buttonText}
        </Button>
      </div>
    </Container>
  );
}

export default About;
