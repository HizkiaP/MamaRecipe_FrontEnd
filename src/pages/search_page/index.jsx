// import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipe } from "../../configs/redux/action/recipeAction";
// import Card from "../../components/module/card";
import Cards from "../../components/module/cards";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipe);
  const [searchByRecipe, setSearchByRecipe] = useState({
    keyword: "",
    sort: "title",
    limit: 2,
    offset: 1,
  });
  const [sort, setSort] = useState("ASC");

  const handleSearchRecipe = () => {
    dispatch(searchRecipe({ sort, keyword: searchByRecipe }));
  };

  const handleSort = () => {
    setSort((prevSort) => (prevSort === "ASC" ? "DESC" : "ASC"));
    // dispatch((sort)=>(sort === "ASC" ? "DESC" : "ASC"))
  };

  useEffect(() => {
    dispatch(searchRecipe({ keyword: searchByRecipe.keyword, sort: searchByRecipe.sort, limit: searchByRecipe.limit, offset: searchByRecipe.offset }));
  }, [dispatch, sort, searchByRecipe]);

  return (
    <>
      <div style={{ display: "flex", marginLeft: "100px" }}>
        <div className="ms-5 mt-4 inputs-search">
          <input
            type="text"
            id="searchRestaurant"
            className="inp-search"
            onChange={(e) => setSearchByRecipe(e.target.value)}
            value={searchByRecipe}
            style={{ width: "1000px" }}
            placeholder="search restaurant, food"
          />
        </div>
        <div>
          <button
            onClick={handleSearchRecipe}
            type="text"
            className="ms-4 mt-4"
          >
            Search
          </button>
          <button onClick={handleSort} type="text" className="ms-2 mt-4">
            Sort
          </button>
        </div>
        <div>
          {recipe.map((item) => (
            <Cards key={item.recipe_id} data={item} />
          ))}
          {/* {recipe.map((item)=>(
          <div key={item.recipe_id}>
            <Cards data={item}></Cards>
          </div>
        ))} */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
