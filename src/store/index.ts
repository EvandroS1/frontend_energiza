import createSagaMiddleware from "redux-saga";
import { EmpresaState } from "./modules/empresas/types";
import { Store, applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface EmpresasState {
  empresa: EmpresaState
}

const sagaMiddleware: any = createSagaMiddleware()

const store: Store<EmpresasState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;