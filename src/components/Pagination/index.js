import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  nextPage: PropTypes.func,
  currentPage: PropTypes.number,
  numberPage: PropTypes.number,
};
Pagination.defaultProps = {
  nextPage: null,
  currentPage: 1,
  numberPage: 1,
};
function Pagination({ nextPage, currentPage, numberPage }) {
  const pageLinks = [];
  for (let i = 1; i < numberPage + 1; i++) {
    let active = currentPage === i && "active";
    pageLinks.push(
      <li className={active} key={i} onClick={() => nextPage(i)}>
        <a href="#">{i}</a>
      </li>
    );
  }
  return (
    <div>
      <ul>
        {currentPage > 1 && (
          <li onClick={() => nextPage(currentPage - 1)}>
            <a href="#">Prev</a>
          </li>
        )}
        {pageLinks}
        {currentPage < numberPage && (
          <li onClick={() => nextPage(currentPage + 1)}>
            <a href="#">Next</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
