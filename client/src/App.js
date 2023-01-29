import "./App.scss";
import Scanner from "./Scanner/scanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Rewards from "./Rewards/Rewards";
import Results from "./Results/Results";
import Nav from "./Nav/Nav";
import History from "./History/History";
import React, { useState } from "react";
import { Context } from "./Context/Context";

function App() {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  return (
    <Context.Provider value={{ user, setUser, product, setProduct }}>
      <Router>
        <Nav />
        <div className="App">
          <Routes>
            <Route
              path="/results"
              element={<Results />}
              className="component-wrapper"
            />
            <Route
              path="/scanner"
              element={<Scanner />}
              className="component-wrapper"
            />
            <Route
              path="/rewards"
              element={<Rewards />}
              className="component-wrapper"
            />
            <Route
              path="/history"
              element={<History />}
              className="component-wrapper"
            />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
