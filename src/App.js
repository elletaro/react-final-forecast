import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/elletaro"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Chantelle Dlamini{" "}
          </a>{" "}
          , open sourced on
          <a
            href="https://github.com/elletaro/react-final-forecast"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://whimsical-walrus.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
