import {takeEvery} from 'redux-saga/effects';
import { addpersondetails, readPerson } from './SagaAction';
export function* rootSaga(){
    yield takeEvery("PERSON_READ_PROPETIES",readPerson)
    yield takeEvery("ADD_DETAILS",addpersondetails)
}