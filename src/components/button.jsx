import { useSelector } from "react-redux";

export default function Button() {
  const data = useSelector((state)=> state.todos)
  console.log(data.leng,"data")
  return (
    <div className="main-button">
      <div>
        <button>{data.length} items left</button>
      </div>
      <div className="btn2">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div><button>Clear Completed</button></div>
    </div>
  );
}
