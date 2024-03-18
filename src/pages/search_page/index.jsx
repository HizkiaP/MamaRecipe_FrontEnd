// import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipe } from "../../configs/redux/action/recipeAction";
// import Card from "../../components/module/card";
import Cards from "../../components/module/cards";
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipe);
  const [searchByRecipe, setSearchByRecipe] = useState({
    keyword: "",
    sort: "ASC",
    limit: 4,
    page: 1,
  });
  // const [sort, setSort] = useState("ASC");

  const handleSearchRecipe = () => {
    dispatch(searchRecipe({ keyword: searchByRecipe.keyword, sort: searchByRecipe.sort, limit: searchByRecipe.limit, page: searchByRecipe.page}));
  };

  const handleSort = () => {
    const newSort = searchByRecipe.sort === "ASC" ? "DESC" : "ASC";
    setSearchByRecipe((prevState) => ({
      ...prevState,
      sort: newSort,
    }));
    // dispatch((sort)=>(sort === "ASC" ? "DESC" : "ASC"))
  };

  useEffect(() => {
    dispatch(searchRecipe({ keyword: searchByRecipe.keyword, sort: searchByRecipe.sort, limit: searchByRecipe.limit, page: searchByRecipe.page }));
  }, [dispatch, searchByRecipe]);

  return (
    <>
    <Navbar />
      <div style={{ display: "flex", marginLeft: "100px", marginTop: "20px" }}>
        <div className="ms-5 mt-4 inputs-search">
          <input
            type="text"
            id="searchRestaurant"
            className="inp-search"
            onChange={(e) => setSearchByRecipe((prevState) => ({
              ...prevState,
              keyword: e.target.value,
            }))}
            value={searchByRecipe.keyword}
            style={{ width: "1000px" }}
            placeholder="search restaurant, food"
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <button
            onClick={handleSearchRecipe}
            type="text"
            className="ms-4 mt-4"
            style={{ border: "none", padding: "10px", borderRadius: "5px" }}
          >
            Search
          </button>
          <button onClick={handleSort} type="text" className="ms-3 mt-4" style={{ border: "none", padding: "10px", borderRadius: "5px" }}>
            Sort
          </button>
        </div>
      </div>
        <div className="d-flex gap-3 mt-5" style={{ marginLeft: "100px" }}>
          {recipe.map((item) => (
            <Cards key={item.recipe_id} data={item} />
          ))}
          {/* {recipe.map((item)=>(
          <div key={item.recipe_id}>
            <Cards data={item}></Cards>
          </div>
        ))} */}
        </div>

        <Footer />
    </>
  );
};

export default SearchPage;
