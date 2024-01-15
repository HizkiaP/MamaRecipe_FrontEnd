import api from "./api";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const response = await api.post("/login", data);
    const user = response.data;
    localStorage.setItem("id", user.data.rows[0].user_id);
    localStorage.setItem("token", user.token);
    // localStorage.setItem("refresh-token", user.refreshToken);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
    throw error.response;
  }
};

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });
    const response = await api.post("/register", data);
    const user = response.data;
    dispatch({type: "REGISTER_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({type: "REGISTER_FAILURE", payload: error})
    throw error.response
  }
}


