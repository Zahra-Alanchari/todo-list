import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/action";

export default function Button({ setFilterStatus }) {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const remain = data.filter((todo)=> !todo.checked)

  function handleDelete() {
    dispatch(deleteTodo());
  }

  function handleFilter(status) {
    setFilterStatus(status);
  }
  return (
    <div className="main-button">
      <div>
        <button>{remain.length} items left</button>
      </div>
      <div className="btn2">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter(false)}>Active</button>
        <button onClick={() => handleFilter(true)}>Completed</button>
      </div>
      <div>
        <button onClick={handleDelete}>Clear Completed</button>
      </div>
    </div>
  );
}
