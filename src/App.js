import React from "react";
import logo from "./logo.svg";
import "./App.css";

function MyComponent() {
  const x = Date.now() % 2 === 0 ? { test: true } : undefined;
  React.useEffect(() => {
    if (x?.test) {
      console.log("testing");
    }
  }, [x?.test]);
  return <div>My Component Test</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload(?).
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MyComponent />
    </div>
  );
}

export default App;
