import axios from 'axios';
import {call,put} from 'redux-saga/effects';
function getCaller(url){
    return axios.get(url);
}
function doPost(url,data){
    return axios.post(url,data);
}
export function* readPerson(){
    let person=yield call(getCaller,"http://localhost:8090/persondata")
    yield put({type:"PERSON_DETAILS",data:person.data});
}
export function* addpersondetails(action){
    let detail=action.data;
    let responce=yield call(doPost,"http://localhost:8090/persondata",detail);
    yield readPerson();
}