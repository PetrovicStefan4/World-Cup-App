import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-danger position-sticky top-0 start-0 end-0 z-index-10">
      <nav className="container d-flex justify-content-between align-items-center py-3">
        <div className="nav-logo text-white">
          <Link to={"/"}>
            <a className="text-white">World Cup Qatar 2022</a>
          </Link>
        </div>
        <ul className="d-flex justify-content-center align-items-center">
          <li className="me-3">
            <Link to={"/"}>
              <a className="nav-link text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <a className="nav-link text-white">Matches</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
