import "./App.css";
import ToDoList from "./ToDoList";
import {useState} from 'react';
import NewTodoForm from './NewTodoForm'


function App() {
  
  let [todos, setTodos] = useState([])
  
  const updateTodo = (newToDo) => {
    setTodos([...todos, newToDo])
  }; 
  
  const removeTask = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const markAsDone = (index) => {
    todos[index].done = todos[index].done ? false : true;
    setTodos([...todos]);
  };
  
  return (
    <div className="App">
      <h1>Let's organize ourselves!!!</h1>
      <br></br>
      <br></br>
      <NewTodoForm setNewTodo={(newToDo) => updateTodo(newToDo)} />
      <ToDoList
        todos={todos}
        setDeleteIndex={removeTask}
        setCompleteIndex={markAsDone}
      />
    </div>
  );
}

export default App;
