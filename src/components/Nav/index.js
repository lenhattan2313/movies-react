import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
// Nav.propTypes = {};

function Nav(props) {
  return (
    <NavBar className="navbar">
      {/* <a href="#" className="brand-navbar">
        Rạp chiếu phim
      </a> */}
    </NavBar>
  );
}

const NavBar = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  height: 30px;
  padding: 2px 10px;
  text-align: center;
  font-weight: bold;
  a {
    display: inline-block;
    margin: auto;
    text-decoration: none;
    color: #fff;
  }
`;
export default Nav;
