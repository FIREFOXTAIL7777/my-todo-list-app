export const InputBox = ({ setInput, handleAddButton }) => {
  return (
    <div className=" h-20 w-full flex items-center justify-center px-5 space-x-1">
      <input
        type="text"
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        placeholder="Add task"
        className="bg-white text-black text-3xl py-1.5 flex-1 "
      />
      <button
        className="bg-mist-300 px-10 py-1.5 text-black text-3xl hover:bg-mist-400 active:bg-mist-500 "
        onClick={handleAddButton}
      >
        Add
      </button>
    </div>
  );
};
