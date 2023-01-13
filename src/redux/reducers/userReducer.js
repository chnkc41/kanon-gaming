import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function userReducer(state = initialState.userRole, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ACTIVE_USER:
            return action.payload 
    
        default:
            return state;
    }
}