import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([
    'Do the laundry',
    'Take a shower',
    'Study javascript',
  ]);

  function handleAddTask() {}

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div
      id="wrapper"
      className=" min-h-screen flex items-center justify-center w-full "
    >
      <div
        id="app-container"
        className="bg-slate-700 flex flex-col items-start justify-start w-130 h-150 "
      >
        <div
          id="title-container"
          className="h-20 w-full flex items-center justify-center "
        >
          <h1>ToDo List</h1>
        </div>

        <div
          id="input-container"
          className=" h-20 w-full flex items-center justify-center px-5 space-x-1"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Add task"
            className="bg-white text-black text-3xl py-1.5 flex-1 "
          />

          <button
            className="bg-mist-300 px-10 py-1.5 text-black text-3xl hover:bg-mist-400 active:bg-mist-500 "
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => {
            <li key={index}>
              <span>{task}</span>
            </li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
