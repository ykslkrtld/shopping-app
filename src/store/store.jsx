import {legacy_createStore as createStore} from "redux"
import { basketReducer } from "./BasketReducer"

export const store = createStore(basketReducer)