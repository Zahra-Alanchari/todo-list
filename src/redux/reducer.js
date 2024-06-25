import {
  ADD_TODO_SUCCESS,
  CHECK_TODO_SUCCESS,
  DELETE_DONE_TODO_SUCCESS,
  DELETE_ITEM_SUCCESS,
  FETCH_TODO_SUCCESS,
} from "./action";

const initialState = { todos: [] };
const todoReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case CHECK_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, checked: action.payload.checked }
            : todo
        ),
      };
    case DELETE_DONE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.checked ),
      };
    case DELETE_ITEM_SUCCESS:
      return{
        ...state,
        todos: state.todos.filter((todo)=>todo.id !== action.payload)
      }
    default:
      return state;
  }
};
export default todoReducer;
