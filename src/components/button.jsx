export default function Button() {
  return (
    <div className="main-button">
      <div>
        <button>x items left</button>
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
