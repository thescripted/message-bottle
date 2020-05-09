import React from "react";

const Message = ({ message }) => {
  return (
    <div className="requested message">
      <p>{message}</p>
    </div>
  );
};

export default Message;
