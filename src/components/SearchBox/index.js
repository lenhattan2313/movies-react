import React from "react";
import PropTypes from "prop-types";

SearchBox.propTypes = {
  handleSubmit: PropTypes.func,
};
SearchBox.defaultProps = {
  handleSubmit: null,
};
function SearchBox(props) {
  const [value, setValue] = React.useState("");
  function handleChange(e) {
    const { value } = e.target;
    setValue(value);
  }
  function onClickSubmit(e) {
    e.preventDefault();
    const { handleSubmit } = props;
    if (!handleSubmit) return;
    handleSubmit(value);
    setValue("");
  }
  return (
    <div className="searchBox">
      <form onSubmit={onClickSubmit}>
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBox;
