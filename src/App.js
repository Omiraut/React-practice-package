import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // whetere Dark node is enablied or not
  const [textStyle, setTextStyle] = useState("text-dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262529";
      setTextStyle("text-light");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      setTextStyle("text-dark");
    }
  };
  return (
    <>
      <NavigationBar
        mode={mode}
        toggleMode={toggleMode}
        textStyle={textStyle}
        title="Text App"
        aboutText="About Us"
        homeText="Main"
      />
      <TextForm
        textStyle={textStyle}
        mode={mode}
        heading="Enter Text To Check "
      />
      <About mode={mode} textStyle={textStyle} />
    </>
  );
}

export default App;
