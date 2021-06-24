export const PersonReducer=(state={person:[]},action)=>{
    switch(action.type){
        case "PERSON_DETAILS":
            return {person:action.data}
            default:
                return state;
    }
}
//export default PersonReducer;