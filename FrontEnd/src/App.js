import React from "react";

import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/Header/MainHeader";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Home />
      </main>
    </React.Fragment>
  );
}

export default App;
