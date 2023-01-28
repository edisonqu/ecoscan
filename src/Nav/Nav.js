import { Link } from "react-router-dom";
import list from "../Assets/list.svg";
import { useState } from "react";

export default function Nav() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <div className="nav">
      <h1>Our Name</h1>
      <span>
        <img src={list} onClick={() => setExpandNav(!expandNav)} />
        {expandNav && (
          <div className="expanded">
            <Link to="/scanner" onClick={() => setExpandNav(false)}>
              Scan Food
            </Link>
            <Link to="/rewards" onClick={() => setExpandNav(false)}>
              Rewards
            </Link>
            <Link to="/history" onClick={() => setExpandNav(false)}>
              Past Items
            </Link>
          </div>
        )}
      </span>
    </div>
  );
}
