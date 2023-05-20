import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer"
const RootReducer = combineReducers({
   user: userReducer
})

export default RootReducer;