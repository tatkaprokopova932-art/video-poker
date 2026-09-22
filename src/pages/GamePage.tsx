import Card from "../components/Card/Card";
import TotalCoins from "../components/TotalCoins";

function GamePage() {
  const testCard = {
    value: "A" as const,
    suit: "hearts" as const,
  };

  return (
    <main>
      <h2>Game</h2>
      <TotalCoins coins ={100}/>
      <Card card={testCard} />
    </main>
  );
}
export default GamePage;
