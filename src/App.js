import "./App.css";
import ToDoList from "./ToDoList";
import {useState} from 'react';
import NewTodoForm from './NewTodoForm'


function App() {
  
  let [todos, setTodos] = useState([])
  const updateTodo = (newToDo) => {
    setTodos([...todos, newToDo])
  } 
  
  console.log(todos)
  const removeTask=(index)=>{
    console.log(index);
    todos.splice(index,1);
    setTodos([...todos]);
    
  }
  
  return (
    <div className="App">
      <NewTodoForm setNewTodo={(newToDo) => updateTodo(newToDo)}/>
      <ToDoList todos={todos} setDeleteIndex={removeTask} />
    </div>
  );
}

export default App;
