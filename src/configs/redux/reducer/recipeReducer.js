const initialState = {
  recipe: [],
  loading: false,
  error: "",
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case "GET_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case "SEARCH_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case "SEARCH_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "CREATE_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case "CREATE_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case "DELETE_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case "DELETE_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
