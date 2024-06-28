/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: "" };

  const handleLogout = () => {
    navigate("/");
    // Optionally, you can refresh the page or update the state to reflect the logout
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">Hello {email}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {isLoggedIn && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
          {isLoggedIn && <Nav.Link href="/about">About</Nav.Link>}
          <Nav.Link href="/support">Support</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {!isLoggedIn ? (
            <>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
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
