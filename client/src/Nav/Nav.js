import { Link } from "react-router-dom";
import list from "../Assets/list.svg";
import { useState } from "react";
import logo from "../Assets/logo.png";

export default function Nav() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <div className="nav">
      <img src={logo} alt="EcoScan" className="logo" />
      <span>
        <img
          src={list}
          alt="dropdown button icon"
          onClick={() => setExpandNav(!expandNav)}
        />
        {expandNav && (
          <div className="expanded">
            <Link to="/scanner" onClick={() => setExpandNav(false)}>
              <span className="underline">Scan Food</span>
            </Link>
            <Link to="/rewards" onClick={() => setExpandNav(false)}>
              <span className="underline">Rewards</span>
            </Link>
            <Link to="/history" onClick={() => setExpandNav(false)}>
              <span className="underline">Scan History</span>
            </Link>
          </div>
        )}
      </span>
    </div>
  );
}
