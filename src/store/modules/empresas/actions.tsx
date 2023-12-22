import { action } from "typesafe-actions";
import { Empresa } from "./types";
import { ActionTypes } from "./actionTypes";

export const formData = (data: Empresa) => action(ActionTypes.FORM_DATA, {data});

export const postRequest = (data: Empresa) => action(ActionTypes.POST_REQUEST, {data});

export const updateRequest = (data: Empresa, id: any) => action(ActionTypes.UPDATE_REQUEST, {data, id});

export const updateSuccess = () => action(ActionTypes.UPDATE_SUCCESS);

export const updateFailure = () => action(ActionTypes.UPDATE_FAILURE);

export const getRequest = () => action(ActionTypes.GET_REQUEST);

export const getSuccess = (data: Empresa[]) => action(ActionTypes.GET_SUCCESS, {data})

export const getFailure = () => action(ActionTypes.GET_FAILURE);

export const deleteRequest = (data: any) => action(ActionTypes.DELETE_REQUEST, {data})