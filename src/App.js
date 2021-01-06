import "./App.css";
import ToDoList from "./ToDoList";
import {useState} from 'react';
import NewTodoForm from './NewTodoForm'


function App() {
  const defaultlist = [{title: "this is a new list item 🥰", done: false}, {title: "this is a new list item", done: true}] 
  
  let [todos, setTodos] = useState(defaultlist)
  
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
