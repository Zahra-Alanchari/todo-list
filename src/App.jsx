import desktopImage from "../images/bg-desktop-dark.jpg";
import Button from "./components/button";
import Header from "./components/header";
import NewTodo from "./components/new-todo";
import TodoList from "./components/todoList";
{
  /* <img src={desktopImage} alt="background-image" /> */
}
export default function App() {
  return (
    <div className="main">
      <div className="main-box">
        <Header />
        <NewTodo />
        <TodoList/>
        <Button/>
      </div>
    </div>
  );
}
