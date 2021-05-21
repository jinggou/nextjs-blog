import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CONST from "../const";

const { LINKS } = CONST;

function LoginButton(href) {
  return (
    <a id="login-btn" href={href} className="btn btn-outline-light btn-sm">
      Login
    </a>
  );
}

function AccountIcon(href) {
  return (
    <Nav.Link href={href}>
      <i className="bi bi-person-circle" id="account-icon" />
    </Nav.Link>
  );
}

export default function TopNavbar({isLoggedIn}) {
  return (
    <Navbar variant="dark" id="navbar">
      <Navbar.Brand href={LINKS.BORROW}>
        <i className="bi bi-book" id="brand-icon" />
        <span>E-Library</span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={LINKS.BORROW}>Borrow</Nav.Link>
        <Nav.Link href={LINKS.RETURN}>Return</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        {isLoggedIn === true
          ? AccountIcon(LINKS.ACCOUNT)
          : LoginButton(LINKS.LOGIN)}
      </Nav>
    </Navbar>
  );
}
