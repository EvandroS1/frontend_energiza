import { ActionType } from "typesafe-actions";
import { postRequest } from "./actions";
import { call } from "redux-saga/effects";
import { api } from "../../../utils/api";

export function* post(action: ActionType<typeof postRequest>): any{
  try {
    const data = action.payload.data;

    // Enviar dados como parte do corpo da requisição POST
    const response = yield call(api.post, "", data);
    console.log('foi', response);
    

    // Faça algo com a resposta, se necessário
  } catch (error) {
    // Lidar com erros, se houver algum
    console.log('erro', error);
    
  }
  
}