import{ combineReducers} from 'redux'
import { PersonReducer } from './Reducers'


export const personsate=combineReducers({
    persondetails:PersonReducer
})