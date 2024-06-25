import Header from "./components/header";
import NewTodo from "./components/new-todo";
import TodoList from "./components/todoList";
import { useState } from "react";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`${lightMode ? "main-light" : "main"}`}>
      <div className="main-box">
        <Header lightMode={lightMode} setLightMode={setLightMode} />
        <NewTodo lightMode={lightMode} />
        <TodoList lightMode={lightMode} />
      </div>
    </div>
  );
}
