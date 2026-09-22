import Card from "../components/Card/Card";
import TotalCoins from "../components/TotalCoins";
import CurrentBet from "../components/CurrentBet";
import PayoutTable from "../components/PayoutTable";

function GamePage() {
  const testCard = {
    value: "A" as const,
    suit: "hearts" as const,
  };

  return (
    <main>
      <h2>Game</h2>

      <TotalCoins coins={100} />
      <CurrentBet bet = {5} />

      <PayoutTable/>

      <Card card={testCard} />
    </main>
  );
}
export default GamePage;
