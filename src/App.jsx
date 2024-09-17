
import { useState } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

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
