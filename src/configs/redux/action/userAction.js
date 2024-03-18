import api from "./api";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const response = await api.post("/login", data);
    const user = response.data;
    const userID = response.data.data.rows[0];
    // localStorage.setItem("id", user.data.rows[0].user_id);
    localStorage.setItem("token", user.token);
    localStorage.setItem("user_id", userID.user_id);
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

export const getByUserId = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_BY_USER_ID_REQUEST" });
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Authorization token not found");
    }
    const userID = localStorage.getItem('user_id');
    console.log('user id = ', userID);
    const response = await api.get(`/profile/${userID}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    const user = response.data.data.rows[0];
    dispatch({type: "GET_BY_USER_ID_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({type: "GET_BY_USER_ID_FAILURE", payload: error})
    throw error.response
  }
}

export const updateUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" });
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("Authorization token not found");
    }
    const userID = localStorage.getItem('user_id');
    console.log('user id = ', userID);
    const response = await api.put(`/user/${userID}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
    });
    const user = response.data.data.rows[0];
    dispatch({type: "UPDATE_USER_ID_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({type: "UPDATE_USER_FAILURE", payload: error})
    throw error.response
  }
}


