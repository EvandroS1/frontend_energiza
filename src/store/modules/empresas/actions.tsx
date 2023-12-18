import { action } from "typesafe-actions";
import { Empresa } from "./types";
import { ActionTypes } from "./actionTypes";

export const formData = (data: Empresa) => action(ActionTypes.FORM_DATA, {data});

export const postRequest = (data: Empresa) => action(ActionTypes.POST_REQUEST, {data});

export const postSuccess = (data: Empresa[]) => action(ActionTypes.POST_SUCCESS, {data});