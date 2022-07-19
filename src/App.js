import React from "react";
import { BrowserRouter } from "react-router-dom";
import Game from "./components/Game";

function App() {
  return (
    <BrowserRouter>
      <Game />
    </BrowserRouter>
  );
}

export default App;
