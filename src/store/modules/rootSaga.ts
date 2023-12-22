import { all, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./empresas/actionTypes";
import { post, get, deleteByCnpj, update } from "./empresas/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ActionTypes.POST_REQUEST, post),
    takeLatest(ActionTypes.GET_REQUEST, get),
    takeLatest(ActionTypes.DELETE_REQUEST, deleteByCnpj),
    takeLatest(ActionTypes.UPDATE_REQUEST, update),
  ])
}