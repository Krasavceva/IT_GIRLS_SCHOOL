import React from "react";
import "./App.css";

// const myStyle = {
//   width: 200,
//   height: 50,
//   fontSize: "1.5em",
//   backgroundColor: "red",
// };

// const Button = () => <button style={myStyle}>Нажми меня</button>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button style={Button}></button>
    </div>
  );
}

export default App;
