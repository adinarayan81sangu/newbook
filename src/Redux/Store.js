import { applyMiddleware, createStore } from "redux";
import { personsate } from "./Combiner";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../Saga/SagaRoot";


const sagaMiddleware=createSagaMiddleware();

export const store=createStore(personsate,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga);
 store.dispatch({type:"PERSON_READ_PROPETIES"})