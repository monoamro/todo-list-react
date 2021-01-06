import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {

  const removeToDo = (event) => {
    event.preventDefault();
    setDeleteIndex(index);
  };

  const markAsDone = () => {
    setCompleteIndex(index);
  };

  return (
    <div className="todo"  >
      <p className={todo.done ? "done" : "notDone"} onClick={markAsDone} >
        {todo.title}
      </p>
      <button onClick={removeToDo}>X</button>{" "}
    </div>
  );
}
