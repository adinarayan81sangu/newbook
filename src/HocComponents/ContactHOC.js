import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Contact from "../Components/Contact";
import { personAction } from "../Redux/Actions/personAction";

const mapStateToProps=(store)=>{
    return{persondetails:store.persondetails.person}
}
const actiondata=(dispatch)=>{
  return new bindActionCreators({changeperson: personAction},dispatch)
}
export const PersonHoc=connect(mapStateToProps,actiondata)(Contact)