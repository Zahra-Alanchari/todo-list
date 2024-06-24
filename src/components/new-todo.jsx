import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(
        addTodo({
          id: new Date().getTime().toString(),
          content: newTodo,
          checked: false,
        })
      );
      setNewTodo("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="creat-todo"
        type="text"
        placeholder="Create a new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
}
