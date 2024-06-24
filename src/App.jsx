import desktopImage from "../images/bg-desktop-dark.jpg";
import Header from "./components/header";
import NewTodo from "./components/new-todo";
{
  /* <img src={desktopImage} alt="background-image" /> */
}
export default function App() {
  return (
    <div className="main">
      <div className="main-box">
        <Header />
        <NewTodo />
      </div>
    </div>
  );
}
