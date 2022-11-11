import {legacy_createStore} from "redux"
import reducer from "./reducer/basketReducer"

export const store = legacy_createStore(reducer)






