import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function TextForm(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
  };
  const copyOnClick = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <Container>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <InputGroup>
            <InputGroup.Text>Input Here</InputGroup.Text>
            <Form.Control
              id="textBox"
              as="textarea"
              value={text}
              onChange={handleOnChange}
              rows={5}
              aria-label="With textarea"
            />
          </InputGroup>
        </div>
        <div className="text-center ">
          <Button
            onClick={handleClick}
            variant="primary"
            size="sm"
            className="ps-3 ms-3"
          >
            Convert To Uppercase
          </Button>
          <Button
            onClick={handleLowClick}
            variant="primary"
            size="sm"
            className="ps-3 ms-3"
          >
            Convert To Lowercase
          </Button>
          <Button
            onClick={copyOnClick}
            variant="primary"
            size="sm"
            className="ps-3 ms-3"
          >
            Copy Text
          </Button>
        </div>

        <div className="text-center">
          <h1>Your Text Summary</h1>
        </div>
        <ul className="text-justify my-5">
          <li>{text.split(" ").length - 1} Words</li>
          <li>{text.length} Characters</li>
          <li>{text.split(".").length - 1} number of approx Sentence</li>
          <li>
            {0.0077 * text.split(" ").length} minute will take to read to
            Average person
          </li>
          <li>
            {0.005 * text.split(" ").length} minute will take to read to Fast
            Reader person
          </li>
        </ul>
        <h3>{text}</h3>
      </Container>
    </>
  );
}

export default TextForm;
