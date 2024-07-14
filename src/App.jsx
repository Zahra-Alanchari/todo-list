import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
// import TodoList from "./components/TodoList";
import { useState } from "react";
import TodoList from "./components/todoList";

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
