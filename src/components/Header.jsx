/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ isLoggedIn, email, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
    // window.location.reload();
  };

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Navbar.Brand as={Link} to="/"><b>TRAVEL WITH CODE</b> {email}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          {isLoggedIn && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Link} to="/tour">Tour</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Link} to="/about">About</Nav.Link>}
          <Nav.Link as={Link} to="/support">Support</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {!isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
