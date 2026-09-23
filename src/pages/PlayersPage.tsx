import { useState, type FormEvent } from "react";
import useGameStore from "../store/gameStore";

function PlayersPage() {
  const players = useGameStore((state) => state.players);
  const activePlayer = useGameStore ((state) => state.activePlayer);
  const createPlayer = useGameStore((state) =>state.createPlayer);
  const selectPlayer = useGameStore ((state) => state.selectPlayer);
  const [playerName, setPlayerName] = useState ("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    createPlayer(playerName);
    setPlayerName("");
  }

  return (
    <main>
      <h2>Players</h2>
      <p>Active player: {activePlayer ? activePlayer.name: "None"}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player-name">Player name</label>
        <input 
        id="player-name" 
        type="text"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
        required
        />

        <button type="submit">Create Player</button>
      </form>


      <ul>
        {players.map((player) => (
          <li key={player.name}>
            {player.name} - {player.coins} coins
            <button type="button" onClick={() => selectPlayer (player.name)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default PlayersPage;
