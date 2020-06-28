import React from "react";
import logo from "./logo.svg";
import "./App.css";
//{} is how JSX (JavaScript XML) recognizes variables

function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}</p>
      </header>
    </div>
  );
}

export default App;
