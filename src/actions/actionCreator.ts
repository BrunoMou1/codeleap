import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "./index";

export const username = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.USERNAME,
      payload: amount,
    });
  };
};

export const id = (amount: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ID,
      payload: amount,
    });
  };
};
