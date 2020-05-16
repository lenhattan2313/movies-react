import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/image/logo.svg";
import searchIcon from "../../assets/image/search.svg";
import styled from "styled-components";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { CATEGORY } from "../../constant";
Header.propTypes = {};
function Header(props) {
  return (
    <NavBarContainer>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          POPCORN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {CATEGORY.map((cat) => (
              <Nav.Link key={cat.title}>{cat.title}</Nav.Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </NavBarContainer>
  );
}
const NavBarContainer = styled.div`
  .navbar-light .navbar-brand {
    color: #fff;
    font-family: "Luckiest Guy", cursive;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
  }
  .form-inline .form-control {
    border-radius: 20px;
    border: none;
  }
  .navbar-light .navbar-toggler {
    background: #fff;
  }
  a {
    text-transform: uppercase;
  }
`;
export default Header;
