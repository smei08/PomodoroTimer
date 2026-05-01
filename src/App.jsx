import { useState } from "react";
import "./App.css";
import Quotes from "./components/Quotes/Qutoes";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import Timer from "./components/Timer/Timer";
import SessionCounter from "./components/SessionCounter/SessionCounter";

function App() {
  return (
    <main>
      <h1>POMODORO TIMER</h1>
      <Quotes />
      <ModeSelector />
      <Timer />
      <SessionCounter />
    </main>
  );
}

export default App;
