import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import authReduce from "./Reducers/authReduce";
import dialogsReduce from "./Reducers/dialogsReduce";
import profileReduce from "./Reducers/profileReduce";
import usersReduce from "./Reducers/usersReduce";
import middleWeir from "redux-thunk";
import { reducer as formReduce } from "redux-form";

let reduces = combineReducers({
  profileData: profileReduce,
  dialogsData: dialogsReduce,
  usersData: usersReduce,
  authData: authReduce,
  form: formReduce
})

const store = createStore(reduces, applyMiddleware(middleWeir));

window.store = store;
export default store; 