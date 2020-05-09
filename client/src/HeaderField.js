import React from "react";

const HeaderField = () => {
  return (
    <div className="intro">
      <p>Hello</p> <br />
      <p>
        This is a website where you can do whatever you want in here. Go ahead
        and write your first message in the text box below.
      </p>{" "}
      <br />
      <input className="submit-button" type="submit" value="Read a New Text" />
    </div>
  );
};

export default HeaderField;
