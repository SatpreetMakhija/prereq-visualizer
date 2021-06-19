import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <NavDropdown title="Select Major" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/computer-science">
              Computer Science
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/physics">
              Physics
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav>
          <Nav.Link
            href="https://www.ashoka.edu.in"
            className="nav-link"
            target="_blank"
          >
            Ashoka
          </Nav.Link>
          <Nav.Link
            href="https://lms.ashoka.edu.in"
            className="nav-link"
            target="_blank"
          >
            LMS
          </Nav.Link>
          <Nav.Link
            href="https://registration.ashoka.edu.in"
            className="nav-link"
            target="_blank"
          >
            Registration Portal
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
