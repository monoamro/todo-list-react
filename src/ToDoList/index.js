import Todo from "../Todo";

const ToDoList = ({ todos, setDeleteIndex, setCompleteIndex }) => {

  const passDeleteIndex = (index) => {
    setDeleteIndex(index);
  };

  const passCompleteIndex = (index) => {
    setCompleteIndex(index);
  };

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            setDeleteIndex={passDeleteIndex}
            setCompleteIndex={passCompleteIndex}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
