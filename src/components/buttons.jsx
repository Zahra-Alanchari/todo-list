import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/action";

export default function Button({ setFilterStatus, lightMode }) {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const remain = data.filter((todo) => !todo.checked);

  function handleDelete() {
    dispatch(deleteTodo());
  }

  function handleFilter(status) {
    setFilterStatus(status);
  }
  return (
    <div className={`${lightMode ? "main-button-light" : "main-button"}`}>
      <div>
        <button>{remain.length} items left</button>
      </div>
      <div className="btn2">
        <button className="all" onClick={() => handleFilter("all")}>
          <a href="#">All</a>
        </button>
        <button className="active" onClick={() => handleFilter(false)}>
          Active
        </button>
        <button className="complete" onClick={() => handleFilter(true)}>
          Completed
        </button>
      </div>
      <div>
        <button onClick={handleDelete}>Clear Completed</button>
      </div>
    </div>
  );
}
