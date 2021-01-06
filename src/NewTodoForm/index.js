import './style.css';
import { useState } from 'react';

const NewTodoForm = ({ setNewTodo }) => {
    
    let [userInput, setUserInput] = useState("");
    const emojies = ["🥰","🥥", "😾", "🧱",  "💔", "🎉", "🚩", "🔥", "🎱", "🧶", "😜", "🐩"];
    const handleClick = userInput => (e) => {
        e.preventDefault();
        const selectedEmoji = emojies[(Math.floor(Math.random() * 11))];
        userInput = selectedEmoji + "     " + userInput;
        const newTask = {
            title: userInput,
            done: false
        }
        setNewTodo(newTask);
        setUserInput("");
      };

    return (
        <form>
            <input value={userInput} placeholder="Add a new task" onChange={(e) => setUserInput(e.target.value) }></input>
            <button onClick={handleClick(userInput)}>Add</button>
        </form>
    )
}

export default NewTodoForm;