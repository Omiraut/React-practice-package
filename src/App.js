import "./App.css";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavigationBar title="Text App" aboutText="About Us" homeText="Main" />
      <TextForm heading="Enter Text To Check " />
      <About />
    </>
  );
}

export default App;
