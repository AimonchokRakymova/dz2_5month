import {GET_USERS} from "../types/types";

const initialState = {
    users: []
}
export function userReducer  (state = initialState, action)  {
    switch (action.type) {
        case GET_USERS:
            return {users: action.payload}
        default:
            return state
    }
}