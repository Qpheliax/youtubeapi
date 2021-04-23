import React from "react";
import { BsSearch } from "react-icons/bs";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search_container">
        <h1 className="h1">Search Youtube videos:</h1>
        <form
          onSubmit={this.onFormSubmit}
          className="search_container__form"
          role="search"
        >
          <input
            id="search"
            type="search"
            placeholder="example:cars"
            autoFocus
            required
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
