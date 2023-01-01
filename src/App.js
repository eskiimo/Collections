import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ReusableNav from "./components/nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ReusableNav links={["home", "Contact"]} title="krem" />
      </Router>
    </div>
  );
}

export default App;
