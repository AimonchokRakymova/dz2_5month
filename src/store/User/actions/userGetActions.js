import {GET_USERS} from "../types/types";

export const getUserActions = async(dispatch) => {
        const response = await fetch('https://reqres.in/api/users')
        const dataResponce = await response.json()
        dispatch({
            type: GET_USERS,
            payload:dataResponce
        })
}