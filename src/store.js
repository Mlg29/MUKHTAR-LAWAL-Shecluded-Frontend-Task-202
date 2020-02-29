import { createStore, applyMiddleware } from "redux"
import rootReducer  from "../src/redux/root-reducer"
import thunk from 'redux-thunk'




const store = createStore(rootReducer, applyMiddleware(thunk))


export default store
