import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Basic from "./components/Basic";
import ContentContext from "./contexts/ContentContext";

function App() {
  return (
    <>
      {/* <Basic></Basic> */}
      <ContentContext></ContentContext>
    </>
  );
}

export default App;
