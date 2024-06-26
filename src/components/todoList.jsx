import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteItem, fetchTodo } from "../redux/action";
import Button from "./buttons";
import Close from "../../public/icon/Close";

export default function TodoList({ lightMode }) {
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
    <div className={`${lightMode ? "todolist-light" : "todolist"}`}>
      <ul className={`${lightMode ? "main-list-light" : "main-list"}`}>
        {filterTodo.map((todo) => (
          <li className={`${lightMode ? "list-light" : "list"}`}>
            <div className="checkBox">
              <input
                className="rounded-checkbox"
                type="checkbox"
                onChange={() => handleChange(todo.id, todo.checked)}
                id={todo.id}
                checked={todo.checked}
              />
              <label
                for={todo.id}
                className={`${todo.checked ? "checked" : ""}`}
                style={{
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              ></label>
              <label
                for={todo.id}
                className={`${todo.checked ? "checked" : ""}`}
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
              <Close />
            </button>
          </li>
        ))}
      </ul>
      <Button
        filterStatus={filterStatus}
        lightMode={lightMode}
        setFilterStatus={setFilterStatus}
      />
    </div>
  );
}
