import { Reducer } from "redux";
import { Empresa, EmpresaState } from "./types";
import { ActionTypes } from "./actionTypes";

const INITIAL_STATE: EmpresaState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<EmpresaState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.POST_REQUEST:
    case ActionTypes.GET_REQUEST:
    case ActionTypes.UPDATE_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.UPDATE_SUCCESS:
      return { ...state, loading: false };
    case ActionTypes.GET_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload as Empresa[]};
    case ActionTypes.GET_FAILURE:
    case ActionTypes.UPDATE_FAILURE:
      return { ...state, data: [], loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
