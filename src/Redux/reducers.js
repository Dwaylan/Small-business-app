import {combineReducers} from "redux"

const business = (state = [], action) => {
    switch (action.type){
        case "ADD_BUSINESS":
            return [...state, action.value]
        case "REMOVE_BUSINESS":
            const newBusiness = [...state]
            newBusiness.splice(action.value, 1)
            return newBusiness

            default:
                return state
    }
}

const user = (state = null) = state

export default combineReducers({business, user})