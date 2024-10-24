//create store
import todoReducer from "./todoReducer.js";
import { createStore } from "redux";

const store = createStore(todoReducer);
export default store