import { combineReducers } from "redux";
import { UserReducer } from "./User/reducer";

const rootReducer = () => {
  return combineReducers({
    user: UserReducer,
  });
};

export default rootReducer;
