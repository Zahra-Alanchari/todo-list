import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/action";

export default function Button({ setFilterStatus, lightMode, filterStatus }) {
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
    <div className={` ${lightMode ? "main-button-light" : "main-button"}`}>
      <div>
        <button className="main-btn">{remain.length} items left</button>
      </div>
      <div className="btn2">
        <button
          className={`main-btn ${filterStatus === "all" && "filterAll"}`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`main-btn ${filterStatus === false && "filterAll"}`}
          onClick={() => handleFilter(false)}
        >
          Active
        </button>
        <button
          className={`main-btn ${filterStatus === true && "filterAll"}`}
          onClick={() => handleFilter(true)}
        >
          Completed
        </button>
      </div>
      <div>
        <button className="main-btn" onClick={handleDelete}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
