import { all, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./empresas/actionTypes";
import { post } from "./empresas/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(ActionTypes.POST_REQUEST, post)
  ])
}