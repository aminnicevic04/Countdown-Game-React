import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

// let timer;
function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  //ovde ne koristimo useState iz razloga jer useState okida rerenderovanje komponente i ako
  //to komponenti nije potrebno a koristimo useref izl razloga jer ne okida rerenderovanje vec samo
  //azurira vrednost refa
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>you lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerStarted ? "active" : "undefined"}>
          {timerStarted ? "Time is running..." : "Timer inactive "}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
