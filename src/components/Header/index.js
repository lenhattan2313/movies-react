import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/image/logo.svg";
import searchIcon from "../../assets/image/search.svg";
import styled from "styled-components";
Header.propTypes = {};

function Header(props) {
  return (
    <HeaderContainer>
      <nav className="navbar">
        <div className="navbar-brand">
          <a hrefLang="#">
            <img src={logo} alt="logo-brand" />
            <span>PoPCORN</span>
          </a>
        </div>
        <div className="navbar__content">
          <ul className="navList">
            <li className="navItems">
              <a className="navLinks" href="#">
                Movies
              </a>
            </li>
            <li className="navItems">
              <a className="navLinks" href="#">
                TV Shows
              </a>
            </li>
          </ul>
        </div>
        <div className="form">
          <form className="formSearch">
            <input type="text" placeholder="Search..." />
            <img src={searchIcon} alt="search icon" />
          </form>
        </div>
      </nav>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  background: rgba(39, 39, 39, 0.67);
  height: 53px;

  .navbar {
    height: 53px;
    max-width: 1280px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    div:last-child {
      margin-left: auto;
    }
    &__content {
      .navList {
        display: flex;
        .navItems {
          margin-right: 15px;
        }
      }
    }
    .form {
      .formSearch {
        display: flex;
        position: relative;
        input {
          padding: 8px 40px 8px 15px;
          border: none;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.31);
          overflow: hidden;
          ::placeholder {
            color: #fff;
            letter-spacing: 1px;
          }

          :focus {
            border-radius: 14px;
            outline: none !important;
            border-image: linear-gradient(to right, red, yellow);
            border-image-slice: 1;
          }
        }
        input[type="text"] {
          color: #fff;
          letter-spacing: 0.8px;
        }
        img {
          width: 22px;
          height: 22px;
          position: absolute;
          right: 10px;
          top: 50%;
          z-index: 2;
          transform: translateY(-50%);
        }
      }
    }

    &-brand {
      margin: auto 0;
      a {
        display: flex;
        align-items: center;
        font-family: "Luckiest Guy", cursive;
        font-size: 1.5rem;
        img {
          display: inline-block;
          margin: auto;
          width: 35.54px;
          height: 35.43px;
        }
        span {
          margin-left: 5px;
        }
      }
    }
  }
`;
export default Header;
