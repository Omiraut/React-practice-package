import React from "react";

import Alert from "react-bootstrap/Alert";
export default function RAlert(props) {
  return (
    props.alert && (
      <div style={{ height: "0px" }}>
        <Alert key="primary" varient={props.alert.type}>
          <strong>{props.alert.type} </strong>{" "}
          <strong> : {props.alert.msg}</strong>
        </Alert>
      </div>
    )
  );
}
