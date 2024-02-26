import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {userReducer} from "./User/userReducer/userReducer";

const enhancer = applyMiddleware(thunk)
const reducer = combineReducers({
    userReducer
})

export const store = createStore(reducer, enhancer)