import React from "react";

const VisualizerCanvas = ({ nodes, listType }) => {
  if (nodes.length === 0)
    return (
      <p className="mt-6 text-slate-500 text-lg font-medium">
        No nodes in the linked list.
      </p>
    );

  return (
    <div className="flex items-center mt-8 overflow-x-auto pb-4 relative">
      {nodes.map((value, index) => (
        <React.Fragment key={index}>
          <div className="relative flex flex-col items-center justify-center min-w-[60px] px-6 py-4 border-2 border-slate-800 bg-white rounded-4xl text-slate-800 font-semibold shadow-md">
            <div>{value}</div>

            {/* Doubly linked list: show previous arrow */}
            {listType === "doubly" && index !== 0 && (
              <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-xl font-bold select-none">
                ←
              </div>
            )}
          </div>

          {/* Arrow between nodes (not last one) */}
          {index !== nodes.length - 1 && (
            <div
              className="mx-4 text-xl font-bold text-slate-800 select-none flex items-center"
              aria-label="Next node pointer"
            >
              →
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Circular Linked List Arrow */}
      {listType === "circular" && nodes.length > 1 && (
        <svg
          width="100"
          height="60"
          className="absolute right-0 top-[3.5rem]"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
            </marker>
          </defs>
          <path
            d="M 20 50 Q 50 10 80 50"
            fill="transparent"
            stroke="#334155"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="50"
            y="20"
            fontSize="14"
            textAnchor="middle"
            fill="#334155"
            fontWeight="bold"
          >
            circular
          </text>
        </svg>
      )}
    </div>
  );
};

export default VisualizerCanvas;
