import Card from "../components/Card/Card";
import TotalCoins from "../components/TotalCoins";
import CurrentBet from "../components/CurrentBet";
import PayoutTable from "../components/PayoutTable";
import useGameStore from "../store/gameStore";

function GamePage() {
  const coins = useGameStore((state) => state.coins);
  const bet = useGameStore((state) => state.bet);
  const startRound = useGameStore ((state)=> state.startRound);
  const hand = useGameStore ((state)=> state.hand);

  const testCard = {
    value: "A" as const,
    suit: "hearts" as const,
  };

  return (
    <main>
      <h2>Game</h2>

      <TotalCoins coins={coins} />
      <CurrentBet bet={bet} />
      <button type="button" onClick={startRound}>Deal</button>
      <div>
        {hand.map((card, index)=> (
          <Card key= {index} card = {card} />
        ))}
      </div>

      <PayoutTable />

      <Card card={testCard} />
    </main>
  );
}
export default GamePage;
