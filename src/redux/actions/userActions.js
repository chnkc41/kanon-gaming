import * as actionType from "./actionTypes"

export function changeUserRole (userRole) {  
    return {
        type: actionType.CHANGE_ACTIVE_USER,
        payload: userRole
    }
}