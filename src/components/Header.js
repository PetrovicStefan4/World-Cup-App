import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-danger position-sticky top-0 start-0 end-0 z-index-10">
      <nav className="container d-flex justify-content-between align-items-center py-2">
        <div className="nav-logo text-white">
          <Link to={"/"}>
            <span className="text-white">Qatar 2022</span>
          </Link>
        </div>
        <ul className="d-flex justify-content-center align-items-center">
          <li className="me-3">
            <Link to={"/"}>
              <span className="nav-link text-white">Home</span>
            </Link>
          </li>
          <li className="me-3">
            <Link to={"/matches"}>
              <span className="nav-link text-white">Matches</span>
            </Link>
          </li>
          <li>
            <Link to={"/teams"}>
              <span className="nav-link text-white">Teams</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
