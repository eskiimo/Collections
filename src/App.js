import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ReusableNav from "./components/nav";
import Calender from "./components/calender";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ReusableNav links={["home", "Contact"]} title="krem" />
        <Calender />
      </Router>
    </div>
  );
}

export default App;
