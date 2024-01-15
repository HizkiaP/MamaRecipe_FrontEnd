import api from "./api";

export const getRecipe = (data) => async (dispatch) => {
    try {
      dispatch({ type: "GET_RECIPE_REQUEST" });
      const response = await api.get("/recipe", data);
      const recipe = response.data;
      dispatch({type: "GET_RECIPE_SUCCESS", payload: recipe });
      return recipe;
    } catch (error) {
      dispatch({type: "GET_RECIPE_FAILURE", payload: error})
      throw error.response
    }
  }

  export const postRecipe = (data) => async (dispatch) => {
    try {
      dispatch({ type: "CREATE_RECIPE_REQUEST" });
      const response = await api.post("/recipe", data);
      const recipe = response.data;
      dispatch({type: "CREATE_RECIPE_SUCCESS", payload: recipe });
      return recipe;
    } catch (error) {
      dispatch({type: "CREATE_RECIPE_FAILURE", payload: error})
      throw error.response
    }
  }