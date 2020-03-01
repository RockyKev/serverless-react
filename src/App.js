import React from "react";
import LowerText from "./components/LowerText";
import logo from "./images/hero2.png";

import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <LowerText />
    </div>
  );
}

export default App;
