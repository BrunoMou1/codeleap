import { combineReducers } from "redux";
import { reducerUser } from "./userReducer";
import { reducerId } from "./userReducer";

const reducers = combineReducers({
  user: reducerUser,
  id: reducerId,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
