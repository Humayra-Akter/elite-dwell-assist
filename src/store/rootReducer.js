import { combineReducers } from "redux";
import searchReducer from "./reducers";

const rootReducer = combineReducers({
  search: searchReducer,
  // other reducers...
});

export default rootReducer;
