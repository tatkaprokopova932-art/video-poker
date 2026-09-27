import Card from "./Card/Card";
import TotalCoins from "./TotalCoins";
import CurrentBet from "./CurrentBet";
import PayoutTable from "./PayoutTable";
import useGameStore from "../store/gameStore";
import { Link } from "react-router-dom";

/**
 * Displays the main Video Poker game and connects the game components
 * with the game state stored in Zustand.
 *
 * @returns The complete Video Poker game UI.
 */
function Game() {
  const activePlayer = useGameStore((state) => state.activePlayer);
  const bet = useGameStore((state) => state.bet);
  const startRound = useGameStore((state) => state.startRound);
  const hand = useGameStore((state) => state.hand);
  const heldCardIndexes = useGameStore((state) => state.heldCardIndexes);
  const toggleHold = useGameStore((state) => state.toggleHold);
  const drawCards = useGameStore((state) => state.drawCards);
  const hasDrawn = useGameStore((state) => state.hasDrawn);
  const currentPokerHand = useGameStore(
    (state) => state.currentPokerHand,
  );

  if (!activePlayer) {
  return (
    <section className="player-required">
      <p className="page-label">VIDEO POKER</p>

      <h2>Who is playing?</h2>

      <p>Select or create a player before starting the game.</p>

      <Link className="select-player-link" to="/players">
        Select Player
      </Link>
    </section>
  );
}

  return (
    <section className="game">
      <div className="game-stats">
      <TotalCoins coins={activePlayer?.coins ?? 0} />
      <CurrentBet bet={bet} />
      </div>


      {currentPokerHand && <p>Hand: {currentPokerHand}</p>}

      <div className="game-hand">
        {hand.map((card, index) => (
          <div className="card-container" key={index}>
            <Card card={card} />

            <button 
            type="button" 
            onClick={() => toggleHold(index)}
            aria-pressed={heldCardIndexes.includes(index)}>

              {heldCardIndexes.includes(index) ? "HELD" : "HOLD"}
            </button>
          </div>
        ))}
      </div>

      <div className="game-actions">
  <button type="button" onClick={startRound}>
    Deal
  </button>

  <button
    type="button"
    onClick={drawCards}
    disabled={hasDrawn || hand.length === 0}
  >
    Draw
  </button>
</div>

      <PayoutTable />
    </section>
  );
}

export default Game;