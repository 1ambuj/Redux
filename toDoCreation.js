
// function that return an action object called action creator
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./constant.js"
export function addTodoActionCreator(todo){
    return {
        type: ADD_TODO,
        payload: todo
    }
}


export function removeTodoActionCreator(todoId){
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
}

export function toggeleTodoActionCreator(todoId){
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}