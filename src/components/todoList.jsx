import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, fetchTodo } from "../redux/action";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos, "fff");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  console.log(todos, "todo");
  function handleChange(id, checked) {
    // console.log(checked, "id");
    dispatch(
      checkTodo({
        id,
        checked: !checked,
      })
    );
  }
  return (
    <div className="todolist">
      <ul className="main-list">
        {todos.map((todo) => (
          <li className="list">
            <input
              type="checkbox"
              onChange={() => handleChange(todo.id, todo.checked)}
              id={todo.id}
              checked={todo.checked}
            />
            <label for={todo.id}>{todo.content}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

