export default function TodoList() {
  return (
    <div className="todolist">
      <ul className="main-list">
        <li className="list">
          <input type="checkbox" id="1" name="1" />
          <label for="1">Scales</label>
        </li>
      </ul>
    </div>
  );
}




{/* <input type="checkbox"  onChange={()=>onToggle(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span> */}
