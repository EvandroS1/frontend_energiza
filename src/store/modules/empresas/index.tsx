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
    case ActionTypes.POST_SUCCESS:
      const payloadData = action.payload as Empresa[];
      return { ...state, loading: false, error: false, data: payloadData };
    case ActionTypes.POST_FAILURE:
      return { ...state, data: [], loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
