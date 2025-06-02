import React, { useState } from "react";
import VisualizerCanvas from "../components/VisualizerCanvas.jsx";
import VisualizerControls from "../components/VisualizerControls.jsx";
import StatusBar from "../components/StatusBar.jsx";

const Visualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [status, setStatus] = useState("Welcome to Linked List Visualizer!");
  const [listType, setListType] = useState("singly");

  const insertNode = (value) => {
    if (!value.trim()) {
      setStatus("Please enter a valid value to insert.");
      return;
    }
    setNodes([...nodes, value]);
    setStatus(`Inserted node "${value}"`);
  };

  const deleteNode = (value) => {
    if (!value.trim()) {
      setStatus("Please enter a valid value to delete.");
      return;
    }
    const index = nodes.indexOf(value);
    if (index === -1) {
      setStatus(`Node "${value}" not found.`);
      return;
    }
    const newNodes = [...nodes];
    newNodes.splice(index, 1);
    setNodes(newNodes);
    setStatus(`Deleted node "${value}"`);
  };

  const reverseList = () => {
    setNodes([...nodes].reverse());
    setStatus("Reversed the linked list.");
  };

  const clearList = () => {
    setNodes([]);
    setStatus("Cleared the linked list.");
  };

  const changeListType = (type) => {
    setListType(type);
    setStatus(`Switched to ${type} linked list mode.`);
  };

  return (
    <div className=" pt-8 px-8 space-y-6">
      
      {/* Header and Dropdown Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Linked List Visualizer ({listType.charAt(0).toUpperCase() + listType.slice(1)})
        </h1>

        
      </div>

      {/* Canvas */}
      <VisualizerCanvas nodes={nodes} listType={listType} />

      {/* Controls */}
      <VisualizerControls
        onInsert={insertNode}
        onDelete={deleteNode}
        onReverse={reverseList}
        onClear={clearList}
        listType={listType}
        onListTypeChange={changeListType}
      />

      {/* Status bar */}
      <StatusBar message={status} />
    </div>
  );
};

export default Visualizer;
