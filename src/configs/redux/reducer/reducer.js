import { combineReducers } from "redux";
import userReducer from "./userReducer";
import recipeReducer from "../reducer/recipeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
});

export default rootReducer;