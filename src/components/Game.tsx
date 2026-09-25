import Card from "./Card/Card";
import TotalCoins from "./TotalCoins";
import CurrentBet from "./CurrentBet";
import PayoutTable from "./PayoutTable";
import useGameStore from "../store/gameStore";

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

  return (
    <section>
      <TotalCoins coins={activePlayer?.coins ?? 0} />

      <CurrentBet bet={bet} />

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

      {currentPokerHand && <p>Hand: {currentPokerHand}</p>}

      <div>
        {hand.map((card, index) => (
          <div key={index}>
            <Card card={card} />

            <button type="button" onClick={() => toggleHold(index)}>
              {heldCardIndexes.includes(index) ? "HELD" : "HOLD"}
            </button>
          </div>
        ))}
      </div>

      <PayoutTable />
    </section>
  );
}

export default Game;