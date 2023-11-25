import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      dialog.current.open();
    }
  }, [timeRemaining]);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={() => {
          clearInterval(timer.current);
          setTimeRemaining(targetTime * 1000);
        }}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Time is running..." : "Timer inactive "}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
