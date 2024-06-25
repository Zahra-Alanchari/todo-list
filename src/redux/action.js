export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const FETCH_TODO = "FETCH_TODO";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const CHECK_TODO = "CHECK_TODO";
export const CHECK_TODO_SUCCESS = "CHECK_TODO_SUCCESS";
export const DELETE_DONE_TODO = "DELETE_DONE_TODO";
export const DELETE_DONE_TODO_SUCCESS = "DELETE_DONE_TODO_SUCCESS";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SUCCESS = "DELETE-ITEM_SUCCESS";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
export const fetchTodo = () => ({
  type: FETCH_TODO,
});
export const checkTodo = (id) => ({
  type: CHECK_TODO,
  payload: id,
});
export const deleteTodo = () => ({
  type: DELETE_DONE_TODO,
});
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
