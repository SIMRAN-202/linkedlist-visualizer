import React from "react";

const StatusBar = ({ message }) => {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 10,
        borderTop: "1px solid #ccc",
        fontStyle: "italic",
        color: "#555",
      }}
    >
      {message}
    </div>
  );
};

export default StatusBar;
