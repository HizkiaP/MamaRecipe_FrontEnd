import api from "./api";

export const getRecipe = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_RECIPE_REQUEST" });
    const response = await api.get("/recipe", data);
    const recipe = response.data.data;
    dispatch({ type: "GET_RECIPE_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "GET_RECIPE_FAILURE", payload: error });
    throw error.response;
  }
};

export const searchRecipe = (data, keyword, sort) => async (dispatch) => {
    try {
      dispatch({ type: "SEARCH_RECIPE_REQUEST" });
      const response = await api.get(`/search?keyword=${keyword}&sort=${sort}`, data);
      const recipe = response.data;
      dispatch({ type: "SEARCH_RECIPE_SUCCESS", payload: recipe });
      return recipe;
    } catch (error) {
      dispatch({ type: "SEARCH_RECIPE_FAILURE", payload: error });
      throw error.response;
    }
  };

export const postRecipe = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_RECIPE_REQUEST" });
    const response = await api.post("/recipe", data);
    const recipe = response.data;
    dispatch({ type: "CREATE_RECIPE_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "CREATE_RECIPE_FAILURE", payload: error });
    throw error.response;
  }
};

export const deleteRecipe = (recipe_id) => async (dispatch) => {
    try {
      dispatch({ type: "DELETE_RECIPE_REQUEST" });
      const response = await api.delete(`/recipe/${recipe_id}`);
      const recipe = response.data;
      dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: recipe });
      return recipe;
    } catch (error) {
      dispatch({ type: "DELETE_RECIPE_FAILURE", payload: error });
      throw error.response;
    }
  };
