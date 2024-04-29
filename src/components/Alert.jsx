import React from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
export default function RAlert(props) {
  return (
    props.alert && (
      <Container style={{ marginTop: "15vh", zIndex: "auto" }}>
        <Alert key="primary" varient={props.alert.type}>
          <strong>{props.alert.type} </strong>{" "}
          <strong> : {props.alert.msg}</strong>
        </Alert>
      </Container>
    )
  );
}
