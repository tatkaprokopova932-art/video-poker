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
  const heldCardIndexes = useGameStore((state) => state.heldCardIndexes);
  const toggleHold = useGameStore((state)=> state.toggleHold);
  const drawCards = useGameStore((state)=> state.drawCards);
  const hasDrawn = useGameStore((state)=>state.hasDrawn);

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

      <button 
      type="button" 
      onClick ={drawCards} 
      disabled={hasDrawn || hand.length===0}>
        Draw
      </button>
      <div>
        {hand.map((card, index)=> (
          <div key= {index}>
            <Card card = {card}/>

            <button type="button" onClick={() => toggleHold (index)}>
              {heldCardIndexes.includes(index)?"HELD" : "HOLD"}
              </button>
          </div>    
        ))}
      </div>

      <PayoutTable />

      <Card card={testCard} />
    </main>
  );
}
export default GamePage;
