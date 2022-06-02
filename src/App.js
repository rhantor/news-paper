import React from "react";
import Components from "./Components";
import Context from "./Context";
import "./index.css";
import "./App.scss";

const App = () => {
  return (
    <>
      <Context>
        <Components />
      </Context>
    </>
  );
};

export default App;
