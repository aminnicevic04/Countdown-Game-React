import { useState } from "react";
export default function Player() {
  const [player, setPlayer] = useState("");
  // const [submited, setSubmited] = useState("");

  function handleChange(event) {
    setPlayer(event.target.value);
  }
  // function handleClick() {
  //   setSubmited(true);
  // }
  return (
    <section id="player">
      <h2>Welcome {player}</h2>
      <p>
        <input
          type="text"
          onChange={handleChange}
          value={player}
          placeholder="Enter nickname"
        />
        <button disable>Enter a nickname</button> <br />
      </p>
    </section>
  );
}
