import { createStore } from "redux";
import rootReducer from './reducer/index.js'



export const store = createStore(rootReducer)
