import React, { useState } from "react";

const MessageField = () => {
  const [message, setMessage] = useState("");

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
        setMessage("");
      });

    setMessage("");
  };

  return (
    <form className="text-field" onSubmit={(e) => handleSubmit(e)}>
      <textarea
        className="textarea"
        placeholder="Dear Website...,"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <input className="submit-button" type="submit" value="submit" />
    </form>
  );
};

export default MessageField;
