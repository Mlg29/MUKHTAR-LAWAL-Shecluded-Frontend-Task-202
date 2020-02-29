import { combineReducers } from "redux"
import { catReducer } from "./catReducer/cat-reducer"
import { lotrReducer } from "./lotrReducer/lotrReducer"

const rootReducer = combineReducers({
    cats: catReducer,
    lotr: lotrReducer
})

export default rootReducer