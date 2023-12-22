import { Reducer } from "redux";
import { Empresa, EmpresaState } from "./types";
import { ActionTypes } from "./actionTypes";

const INNITIAL_STATE: EmpresaState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<EmpresaState> = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.POST_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.GET_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.UPDATE_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.UPDATE_SUCCESS:
      return { ...state, loading: false };
    case ActionTypes.GET_SUCCESS:
      const payloadData = action.payload;
      return { ...state, loading: false, error: false, data: payloadData };
    case ActionTypes.GET_FAILURE:
      return { ...state, data: [], loading: false, error: true };
    case ActionTypes.UPDATE_FAILURE:
      return { ...state, data: [], loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
