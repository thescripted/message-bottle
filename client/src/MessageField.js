import React, { useState } from "react";

const MessageField = () => {
  const [message, setMessage] = useState("Dear Website...,\n\n");
  const [anotherMessage, isAnotherMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Date.now());
    fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) console.log(res.error.message || res.error);
        setMessage("Dear Website...,\n\n");
        isAnotherMessage(false); // Remove the message box.
      })
      .catch((err) => throwErrorOnScreen());
  };

  const throwErrorOnScreen = () => {
    console.log("do nothing for now...");
  };

  return (
    <div className="text-field">
      {anotherMessage ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            className="textarea"
            placeholder="Dear Website...,"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <input className="submit-button" type="submit" value="submit" />
        </form>
      ) : (
        <span className="thank-you">
          <p>Thank you!</p>
          <button
            className="submit-button"
            onClick={() => isAnotherMessage(true)}
          >
            Another?
          </button>
        </span>
      )}
    </div>
  );
};

export default MessageField;
