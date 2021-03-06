import "./App.css";
import ToDoList from "./ToDoList";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

function App() {
  let [todos, setTodos] = useState([]);

  const updateTodo = (newToDo) => {
    setTodos([...todos, newToDo]);
  };

  const removeTask = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const markAsDone = (index) => {
    console.log(index);
    todos[index].done = todos[index].done ? false : true;
    setTodos([...todos]);
  };

  return (
    <div className="App">

      <h1>THE AMAZING TODO-LIST</h1>
      <NewTodoForm setNewTodo={updateTodo} />
      <ToDoList  
        todos={todos}
        setDeleteIndex={(index) => removeTask(index)}
        setCompleteIndex={markAsDone}
      />    
    </div>
  );
}

export default App;
