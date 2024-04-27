import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import TextForm from "./components/TextForm";

function App() {
  // const [Mode, setMode] = useState("light");
  return (
    <>
      <NavigationBar title="Text App" aboutText="About Us" homeText="Main" />
      <TextForm heading="Enter Text To Check " />
      <About />
    </>
  );
}

export default App;
