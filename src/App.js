import React from "react";
import logo from "./logo.svg";
import "./App.css";

function MyComponent() {
  console.warn("Oh no");
  const x = Date.now() % 2 === 0 ? { test: true } : undefined;
  React.useEffect(() => {
    if (x?.test) {
      console.log("testing");
    }
  }, [x?.test]);
  return <div>My Component Test</div>;
}

// function useHook({ bar }) {
//   let foo1 = bar && React.useState();
//   let foo2 = bar || React.useState();
//   let foo3 = bar ?? React.useState();
// }

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
