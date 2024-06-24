import { createStore } from "redux";
import desktopImage from "../images/bg-desktop-dark.jpg";
import Button from "./components/button";
import Header from "./components/header";
import NewTodo from "./components/new-todo";
import TodoList from "./components/todoList";
import { useState } from "react";
{
  /* <img src={desktopImage} alt="background-image" /> */
}
// const x = createStore()
export default function App() {
  return (
    <div className="main">
      <div className="main-box">
        <Header />
        <NewTodo />
        <TodoList/>
        <Button />
      </div>
    </div>
  );
}
