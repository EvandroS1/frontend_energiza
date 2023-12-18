import { ActionType } from "typesafe-actions";
import { postRequest } from "./actions";

export function* post(action: ActionType<typeof postRequest>){
  const data = action.payload.data;
  console.log('data:',data);
  
}