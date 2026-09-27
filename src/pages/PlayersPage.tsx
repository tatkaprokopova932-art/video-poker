import { useState, type FormEvent } from "react";
import useGameStore from "../store/gameStore";

/**
 * Displays the player selection page where users can create
 * a new player or select an existing player.
 *
 * @returns The players page UI.
 */
function PlayersPage() {
  const players = useGameStore((state) => state.players);
  const activePlayer = useGameStore((state) => state.activePlayer);
  const createPlayer = useGameStore((state) => state.createPlayer);
  const selectPlayer = useGameStore((state) => state.selectPlayer);

  const [playerName, setPlayerName] = useState("");

  /**
   * Creates a new player using the name entered in the form.
   *
   * @param event - The form submit event.
   * @returns Nothing.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createPlayer(playerName);
    setPlayerName("");
  }

  return (
    <main>
      <div className="players-page">
        <div className="players-heading">
          <p className="page-label">VIDEO POKER</p>
          <h2>Players</h2>
          <p>Create a player or choose who is playing.</p>
        </div>

        <section className="create-player">
          <h3>Create Player</h3>

          <form className="player-form" onSubmit={handleSubmit}>
            <label htmlFor="player-name">Player name</label>

            <div className="player-form-controls">
              <input
                id="player-name"
                type="text"
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
                placeholder="Enter your name"
                required
              />

              <button type="submit">Create</button>
            </div>
          </form>
        </section>

        <section className="player-list-section">
          <div className="player-list-heading">
            <h3>Your Players</h3>

            <span>
              {players.length} {players.length === 1 ? "player" : "players"}
            </span>
          </div>

          <div className="player-list">
            {players.map((player) => {
              const isActive = activePlayer?.name === player.name;

              return (
                <article
                  className={`player-card ${isActive ? "active-player" : ""}`}
                  key={player.name}
                >
                  <div>
                    <h4>{player.name}</h4>
                    <p>{player.coins} coins</p>
                  </div>

                  {isActive ? (
                    <span className="active-badge">Active</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => selectPlayer(player.name)}
                    >
                      Select
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PlayersPage;