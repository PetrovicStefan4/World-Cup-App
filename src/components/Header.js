import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import TrophyIcon from "./Icons/TrophyIcon";

const Header = () => {
  return (
    <header className="position-sticky top-0 start-0 end-0 z-index-10 box-shadow">
      <Navbar bg="success" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <div className="d-flex justify-content-center align-items-center">
              <span className="me-2">
                <TrophyIcon />
              </span>
              <span className="fs-24 fw-bold">Qatar 2022</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">
                <span className="fw-bold fs-18">Home</span>
              </Nav.Link>
              <Nav.Link href="/news">
                <span className="fw-bold fs-18">News</span>
              </Nav.Link>
              <Nav.Link href="/matches">
                <span className="fw-bold fs-18">Matches</span>
              </Nav.Link>
              <Nav.Link href="/teams">
                <span className="fw-bold fs-18">Teams</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
