import store from "./store.js";
import {addTodoActionCreator} from "./toDoCreation.js"
store.dispatch(addTodoActionCreator(5))
store.dispatch(addTodoActionCreator(6))
console.log(store.getState())