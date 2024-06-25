import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteItem, fetchTodo } from "../redux/action";
import Button from "./button";


export default function TodoList({lightMode}) {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (filterStatus === "all") {
      setFilterTodo(todos);
    } else {
      setFilterTodo(todos.filter((todo) => todo.checked === filterStatus));
    }
  }, [todos, filterStatus]);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  function handleChange(id, checked) {
    dispatch(
      checkTodo({
        id,
        checked: !checked,
      })
    );
  }

  function handleDeleteItem(id) {
    dispatch(
      deleteItem({
        id,
      })
    );
  }
  console.log(filterTodo, "filtt");
  return (
    <div className={`${lightMode? "todolist-light": "todolist"}`}>
      <ul className={`${lightMode? "main-list-light": "main-list"}`}>
        {filterTodo.map((todo) => (
          <li className={`${lightMode? "list-light": "list"}`}>
            <div>
              <input
                className="rounded-checkbox"
                type="checkbox"
                onChange={() => handleChange(todo.id, todo.checked)}
                id={todo.id}
                checked={todo.checked}
                
              />
              
              <label
                for={todo.id}
                className={`${todo.checked ? "checked": ""}`}
                style={{
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.content}
              </label>
            </div>
            <button
              className="delete"
              onClick={() => handleDeleteItem(todo.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </button>
          </li>
        ))}
      </ul>
      <Button lightMode={lightMode} setFilterStatus={setFilterStatus} />
    </div>
  );
}
