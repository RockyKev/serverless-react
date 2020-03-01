import React from "react";
import logo from "./images/hero2.png";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <p className="tagline">Everything is up and running!</p>
    </div>
  );
}

export default App;
