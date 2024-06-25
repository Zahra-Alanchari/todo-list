import { createStore } from "redux";
import desktopImage from "../images/bg-desktop-dark.jpg";
import Button from "./components/button";
import Header from "./components/header";
import NewTodo from "./components/new-todo";
import TodoList from "./components/todoList";
import { useEffect, useState } from "react";
{
  /* <img src={desktopImage} alt="background-image" /> */
}
// const x = createStore()
export default function App() {
  const [lightMode, setLightMode] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [lightMode]
  );
  return (
    <div className={`${lightMode? "main-light": "main"}`}>
      <div className="main-box">
        <Header lightMode={lightMode} setLightMode={setLightMode} />
        <NewTodo lightMode={lightMode} setLightMode={setLightMode} />
        <TodoList lightMode={lightMode} setLightMode={setLightMode} />
      </div>
    </div>
  );
}
