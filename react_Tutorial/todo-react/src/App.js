import React from "react";
import logo from "./logo.svg";
import "./App.css";
//{} is how JSX (JavaScript XML) recognizes variables

function App(props) {
  //props shows as Object { subject: 'Chris'} props are collected into objects in this fashion
  console.log(props);
  const subject = props.subject;
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

/*
Components can import modules they need, and must export themselves at the bottom of their files.

Component functions are named with PascalCase.

You can read JSX variables by putting them between curly braces, like {so}.

Some JSX attributes are different to HTML attributes, so that they don't conflict with JavaScript reserved words. 
For example, class in HTML translates to className in JSX. Note that multi-word attributes are camel-cased.

Props are written just like attributes inside component calls, and are passed into components.
*/
