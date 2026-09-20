import Card from "../components/Card/Card";

function GamePage() {
  const testCard = {
    value: "A" as const,
    suit: "hearts" as const,
  };

  return (
    <main>
      <h2>Game</h2>
      <Card card={testCard}/>
    </main>
  );
}
export default GamePage;
