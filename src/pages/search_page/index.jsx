import React from "react";
import { useState } from "react";

const SearchPage = () => {
    const [searchRecipe, setSearchRecipe] = useState([])

  return (
    <>
      <div className="position-absolute px-5 input-search">
        <input
          type="text"
          id="searchRestaurant"
          className="inp-search"
          placeholder="search restaurant, food"
        />
      </div>
    </>
  );
};

export default SearchPage;
