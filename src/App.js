import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  const [mode, setMode] = useState("light"); // whetere Dark node is enablied or not
  const [textStyle, setTextStyle] = useState("text-dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262529";
      setTextStyle("text-light");
      alertSetter("Dark Mode is Been Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      setTextStyle("text-dark");
      alertSetter("Light Mode is Been Enabled", "Success");
    }
  };

  const [alert, setAlert] = useState(null);
  const alertSetter = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <NavigationBar
          mode={mode}
          toggleMode={toggleMode}
          textStyle={textStyle}
          title="Text App"
          aboutText="About Us"
          homeText="Main"
        />
        <Alert alert={alert} />
        <Container>
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} textStyle={textStyle} />}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter Text Here"
                  mode={mode}
                  textStyle={textStyle}
                />
              }
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
