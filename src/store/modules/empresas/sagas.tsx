import { ActionType } from "typesafe-actions";
import { deleteRequest, getFailure, getSuccess, postRequest, updateRequest } from "./actions";
import { call, put } from "redux-saga/effects";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

export function* post(action: ActionType<typeof postRequest>): any {
  try {
    const data = action.payload.data;
    
    // Enviar dados como parte do corpo da requisição POST
    const response = yield call(api.post, "", data);
    toast.promise(
      response,
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
  )
    console.log("foi:", response);
    
    // Faça algo com a resposta, se necessário
  } catch (error) {
    // Lidar com erros, se houver algum
    console.log("erro:", error);
  }
}
export function* update(action: ActionType<typeof updateRequest>): any {
  try {
    const data = {...action.payload.data};
    const id = action.payload.id;
    if ('senhaConfirm' in data) {
      delete data.senhaConfirm;
    }
    // if ('complem' in data) {
    //   delete data.complem;
    // }
    // console.log(data);
    
    // Enviar dados como parte do corpo da requisição POST
    yield toast.promise(
    api.put(`/?id=${id}`, data),
    // console.log("foi:", response);
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
  )
    
    // Faça algo com a resposta, se necessário
  } catch (error) {
    // Lidar com erros, se houver algum
    console.log("erro:", error);
  }
}

export function* get(): any {
  try {
    const response = yield call(api.get, "");
    const data = response.data.users
    console.log("get", data);

    yield put(getSuccess(data));
  } catch (error) {
    yield put(getFailure());
  }
}
export function* deleteByCnpj(action: ActionType<typeof deleteRequest>): any {
  const id = action.payload.data
  console.log(id);
  
  try {
    const response = yield call(api.delete,`/?id=${id}`);
    console.log("Usuario excluido", response);
    
  } catch (error) {
    console.log("Erro ao excluir usuario", error);
  }
}
