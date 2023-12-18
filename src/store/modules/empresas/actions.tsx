import { action } from "typesafe-actions";
import { Empresa } from "./types";
import { ActionTypes } from "./actionTypes";

export const postRequest = (data: Empresa) => action(ActionTypes.POST_REQUEST, {data});

export const postSuccess = (data: Empresa[]) => action(ActionTypes.POST_SUCCESS, {data});