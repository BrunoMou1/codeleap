import { ActionType } from "./actionTypes";

interface Username {
  type: ActionType.USERNAME;
  payload: string;
}

interface Id {
  type: ActionType.ID;
  payload: string;
}

export type Action = Username | Id;
