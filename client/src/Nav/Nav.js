import { Link } from "react-router-dom";
import list from "../Assets/list.svg";
import {useContext, useState} from "react";
import logo from "../Assets/logo.png";
import barcode from "../Assets/barcode.svg";
import {Context} from "../Context/Context";

export default function Nav() {
  const [expandNav, setExpandNav] = useState(false);
  const { loggedIn } = useContext(Context);

  return (
    <div className="nav">
      {loggedIn && <Link to="/scanner">
        <img src={barcode} alt="EcoScan" className="barcode" />
      </Link>}
      <img src={logo} alt="EcoScan" className="logo" />
      {loggedIn && <span>
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
      </span>}
    </div>
  );
}
