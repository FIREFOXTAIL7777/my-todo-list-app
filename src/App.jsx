import { Trash, ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([
    'Do the laundry',
    'Take a shower',
    'Study javascript',
  ]);

  function handleAddTask() {
    const newTask = input;
    if (input.trim() !== '') {
      setTasks((t) => [...t, newTask]);
      setInput('');
    }
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleDeleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);

    setTasks(updatedTask);
  }

  function handleMoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  function handleMoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <div
      id="wrapper"
      className=" min-h-screen flex items-center justify-center w-full "
    >
      <div
        id="app-container"
        className="bg-slate-700 flex flex-col items-start justify-start w-130 h-150 px-5 pb-5 "
      >
        <div
          id="title-container"
          className="h-20 w-full flex items-center justify-center "
        >
          <h1>ToDo List</h1>
        </div>

        <div
          id="input-container"
          className=" h-max w-full flex items-center justify-center space-x-1 mb-4.5"
        >
          <input
            type="text"
            value={input}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTask();
              }
            }}
            onChange={handleInputChange}
            placeholder="Add task"
            className="bg-white text-black text-3xl pl-0.5 py-1.5 flex-1 rounded"
          />

          <button
            id="addBtn"
            onClick={handleAddTask}
            className="bg-mist-300 px-2.5 h-full text-black text-3xl hover:bg-mist-400 active:bg-mist-500 rounded "
          >
            <Plus color="black" />
          </button>
        </div>

        <ol className="w-full min-w-0 space-y-5 overflow-y-auto scrollbar-none">
          {tasks.map((task, index) => {
            return (
              <li key={index} className="flex w-full min-w-0">
                <div
                  id="task"
                  className="flex-1 min-w-0 bg-zinc-800 pl-0.5 py-2 rounded"
                >
                  <p
                    id="text"
                    className="text-start text-gray-100 text-3xl font-san whitespace-normal wrap-break-word line-clamp-2"
                  >
                    {task}
                  </p>
                </div>

                <button
                  id="delete"
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-700 px-2.5 hover:bg-red-600 active:bg-red-800 shrink-0 rounded"
                >
                  <Trash color="white" />
                </button>

                <button
                  id="up"
                  onClick={() => handleMoveTaskUp(index)}
                  className="bg-gray-800 border-r border-gray-600 px-2.5 hover:bg-gray-700 active:bg-gray-900 shrink-0 rounded"
                >
                  <ChevronUp color="white" />
                </button>

                <button
                  id="down"
                  onClick={() => handleMoveTaskDown(index)}
                  className="bg-gray-800 px-2.5 hover:bg-gray-700 active:bg-gray-900 shrink-0 rounded"
                >
                  <ChevronDown color="white" />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
