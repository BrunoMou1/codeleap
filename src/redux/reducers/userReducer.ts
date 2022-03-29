import { ActionType } from "../../actions/actionTypes";
import { Action } from "../../actions/index";

const initialStateUser = "";
const initialStateId = "";

export const reducerUser = (state: string = initialStateUser, action: Action): string => {
  switch (action.type) {
    case ActionType.USERNAME:
      return action.payload;
    default:
      return state;
  }
};

export const reducerId = (state: string = initialStateId, action: Action): string => {
  switch (action.type) {
    case ActionType.ID:
      return action.payload;
    default:
      return state;
  }
};
