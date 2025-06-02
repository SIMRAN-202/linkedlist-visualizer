import React, { useState } from "react";

const VisualizerControls = ({
  onInsert,
  onDelete,
  onReverse,
  onClear,
  listType,
  onListTypeChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInsert = () => {
    onInsert(inputValue);
    setInputValue("");
  };

  const handleDelete = () => {
    onDelete(inputValue);
    setInputValue("");
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      {/* Input field */}
      <input
        type="text"
        placeholder="Enter node value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-4 py-2 rounded-4xl bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
      />

      {/* Action Buttons */}
      <button
        onClick={handleInsert}
        className="bg-white text-slate-800 border border-slate-900 rounded-4xl px-4 py-2  hover:ring-2 hover:ring-slate-500 transition-all duration-200"
      >
        Insert Node
      </button>

      <button
        onClick={handleDelete}
        className="bg-white text-slate-800 border border-slate-900 rounded-4xl px-4 py-2  hover:ring-2 hover:ring-slate-500 transition-all duration-200"
      >
        Delete Node
      </button>

      <button
        onClick={onReverse}
        className="bg-white text-slate-800 border border-slate-900 rounded-4xl px-4 py-2  hover:ring-2 hover:ring-slate-500 transition-all duration-200"
      >
        Reverse List
      </button>

      <button
        onClick={onClear}
        className="bg-white text-slate-800 border border-slate-900 rounded-4xl px-4 py-2  hover:ring-2 hover:ring-slate-500 transition-all duration-200"
      >
        Clear List
      </button>

      {/* Optional: list type dropdown (can be removed since it's already on top) */}
      <select
        value={listType}
        onChange={(e) => onListTypeChange(e.target.value)}
        className="ml-auto px-4 py-2 bg-slate-800 text-white rounded-4xl border border-slate-700 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        <option value="singly">Singly Linked List</option>
        <option value="doubly">Doubly Linked List</option>
        <option value="circular">Circular Linked List</option>
      </select>
    </div>
  );
};

export default VisualizerControls;
