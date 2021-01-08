import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {

  const removeToDo = (event) => {
    event.target.parentNode.classList.add("opacity")

    setTimeout(() => { 
      setDeleteIndex(index);
      event.target.parentNode.classList.remove("opacity")
    },300);
  };

  return (
    <div className="todo">
      <p className={todo.done ? "done" : "notDone"} onClick={() => setCompleteIndex(index)}>
        {todo.title}
      </p>
      <button onClick={removeToDo}></button>
    </div>
  );
}
