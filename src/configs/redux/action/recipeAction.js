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

export const getRecipeByUserId = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_RECIPE_BY_USER_ID_REQUEST" });
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Authorization token not found");
    }
    const userID = localStorage.getItem('user_id');
    console.log('user id = ', userID);
    const response = await api.get(`/recipe/${userID}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    const recipe = response.data.data;
    dispatch({ type: "GET_RECIPE_BY_USER_ID_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "GET_RECIPE_BY_USER_ID_FAILURE", payload: error });
    throw error.response;
  }
};

export const getRecipeId = (recipe_id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_RECIPE_ID_REQUEST" });
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Authorization token not found");
    }
    // const userID = localStorage.getItem('user_id');
    // console.log('user id = ', userID);
    const response = await api.get(`/recipe/getbyid/${recipe_id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    const recipe = response.data.data[0];
    dispatch({ type: "GET_RECIPE_ID_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "GET_RECIPE_ID_FAILURE", payload: error });
    throw error.response;
  }
};

export const searchRecipe = ({keyword, sort, limit, page}) => async (dispatch) => {
    try {
      dispatch({ type: "SEARCH_RECIPE_REQUEST" });
      // const response = await api.get(`/search?keyword=${keyword}&sort=${sort}&limit=${limit}&offset${offset}`, data);
      const response = await api.get(`/search?keyword=${keyword}&sort=${sort}&limit=${limit}`)
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
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Authorization token not found");
    }
    const response = await api.post("/recipe", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      }
    });
    const recipe = response.data;
    dispatch({ type: "CREATE_RECIPE_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "CREATE_RECIPE_FAILURE", payload: error });
    throw error.response;
  }
};

export const updateRecipe = ( data, recipe_id ) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_RECIPE_REQUEST" });
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Authorization token not found");
    }
    const response = await api.put(`/recipe/${recipe_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      }
    });
    const recipe = response.data;
    dispatch({ type: "UPDATE_RECIPE_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "UPDATE_RECIPE_FAILURE", payload: error });
    throw error.response;
  }
};

export const deleteRecipe = (recipe_id) => async (dispatch) => {
    try {
      dispatch({ type: "DELETE_RECIPE_REQUEST" });
      const response = await api.delete(`/recipe/${recipe_id}`);
      const recipe = response.data;
      dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: recipe_id });
      return recipe;
    } catch (error) {
      dispatch({ type: "DELETE_RECIPE_FAILURE", payload: error });
      throw error.response;
    }
  };
