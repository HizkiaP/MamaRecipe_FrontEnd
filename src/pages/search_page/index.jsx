// import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../configs/redux/action/recipeAction";
import Card from "../../components/module/card";

const SearchPage = () => {
    const dispatch = useDispatch();
    const [searchByRecipe, setSearchByRecipe] = useState("");
    const [sort, setSort] = useState("ASC")

    const handleSearchRecipe = () => {
      dispatch(searchRecipe({sort, keyword: searchByRecipe}))
    }

    const handleSort = () => {
      dispatch((sort)=>(sort === "ASC" ? "DESC" : "ASC"))
    }


    useEffect(() => {
      dispatch(searchRecipe({sort, keyword: searchByRecipe}))
    }, [dispatch, sort, searchByRecipe])


  return (
    <>
    <div  style={{ display: "flex", marginLeft: "100px"}}>
    <div className="ms-5 mt-4 inputs-search">
        <input
          type="text"
          id="searchRestaurant"
          className="inp-search"
          onChange={(e)=>setSearchByRecipe(e.target.value)}
          value={searchByRecipe}
          style={{ width: "1000px"}}
          placeholder="search restaurant, food"
        />
      </div>
      <div>
        <button onClick={handleSearchRecipe} type="text" className="ms-4 mt-4">Search</button>
        <button onClick={handleSort} type="text"  className="ms-2 mt-4">Sort</button>
      </div>
      <div>
        {/* {searchByRecipe.map((item)=>(
          <div key={item.recipe_id}>
            <Card data={item}></Card>
          </div>
        ))} */}
      </div>
    </div>
      
    </>
  );
};

export default SearchPage;
