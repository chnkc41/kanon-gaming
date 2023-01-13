import { combineReducers } from "redux";
import userReducer from "./userReducer"

// We will add all Reducers
const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;
