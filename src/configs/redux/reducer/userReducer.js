const initialState = {
  user: {},
  loading: false,
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BY_USER_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BY_USER_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "GET_BY_USER_ID_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
