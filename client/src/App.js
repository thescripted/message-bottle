import React from "react";
import MessageField from "./MessageField";
import HeaderField from "./HeaderField";

const App = () => {
  return (
    <div className="App">
      <header> Message in a Bottle... </header>
      <HeaderField />
      <MessageField />
      <div className="footer-field">
        <footer>Created by Benjamin Kinga</footer>
      </div>
    </div>
  );
};

export default App;
