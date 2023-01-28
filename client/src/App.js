import "./App.scss";
import Scanner from "./Scanner/scanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Rewards from "./Rewards/Rewards";
import Results from "./Results/Results";
import Nav from "./Nav/Nav";

function App() {
  return (
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
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
