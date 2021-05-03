import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search_container">
      <h1 className="h1">Search Youtube videos:</h1>
      <form
        onSubmit={onSubmit}
        className="search_container__form"
        role="search"
      >
        <input
          id="search"
          type="search"
          placeholder="example:cars"
          autoFocus
          required
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
