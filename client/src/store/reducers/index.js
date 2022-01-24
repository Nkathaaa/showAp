//combine reducers
import { combineReducers } from "redux";
import users from "./user_reducers"

const rootReducers=combineReducers({
    users
})

export default rootReducers