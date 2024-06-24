export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const FETCH_TODO = 'FETCH_TODO'
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS'
export const CHECK_TODO = 'CHECK_TODO'
export const CHECK_TODO_SUCCESS = 'CHECK_TODO_SUCCESS'
// export const FILTER_ACTIVE_TODO = 'FILTER_ACTIVE_TODO'
// export const FILTER_ACTIVE_TODO_SUCCESS = 'FILTER_ACTIVE_TODO_SUCCESS'

export const addTodo= (todo)=> ({
    type:ADD_TODO,
    payload: todo,
})
export const fetchTodo=()=>({
    type:FETCH_TODO,
})
export const checkTodo=(id)=>({
    type:CHECK_TODO,
    payload: id,
})
// export const checkActiveTodo=(checked)=>({
//     type:FILTER_ACTIVE_TODO,
//     payload: checked,
// })