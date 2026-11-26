import { TodoList } from './components/TodoList';
import { InputBox } from './components/InputBox';
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [clicked, setClicked] = useState(false);

  function handleAddButton() {
    setClicked(true);
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

        <InputBox setInput={setInput} handleAddButton={handleAddButton} />

        <TodoList clicked={clicked} input={input} />
      </div>
    </div>
  );
}

export default App;
