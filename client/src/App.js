import "./App.scss";
import Scanner from "./Scanner/scanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Rewards from "./Rewards/Rewards";
import Results from "./Results/Results";
import Nav from "./Nav/Nav";
import History from "./History/History";
import React, { useEffect, useState } from "react";
import { Context } from "./Context/Context";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [product, setProduct] = useState(null);
  const [pastScans, setPastScans] = useState([]);
  const [unwrapped, setUnwrapped] = useState(true);

  useEffect(() => {
    fetch("https://om-ecoscan-default-rtdb.firebaseio.com/foods.json")
      .then((r) => r.json())
      .then((data) => {
        const dataArr = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            dataArr.push({ ...data[key], id: key });
          }
        }
        setPastScans(dataArr);
      });
  }, []);

  return (
    <Context.Provider value={{ loggedIn, setLoggedIn, product, setProduct, pastScans, setPastScans, unwrapped, setUnwrapped }}>
      <Router>
        <Nav />
        <div className="App">
          {product ? (
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
          ) : (
            <Routes>
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
          )}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
