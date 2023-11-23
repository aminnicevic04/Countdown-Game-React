import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();

  const [player, setPlayer] = useState(null);

  function handleClick() {
    setPlayer(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {player ? player : "unknow entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Enter a nickname</button> <br />
      </p>
    </section>
  );
}
